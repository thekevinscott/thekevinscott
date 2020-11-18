import requests
import argparse
import json
import markdown
from markdown.treeprocessors import Treeprocessor
from markdown.extensions import Extension
from urllib.parse import urljoin
from bs4 import BeautifulSoup


access_token = '2f2da3712e0c2ee5e225b2aa90f8409a8dd0871f328c9c8d235760bb5abca4e6b'
headers = {
    'Authorization': f"Bearer {access_token}",
    'User-Agent': 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.84 Safari/537.36'
}
base_url = 'https://api.medium.com/v1'

# class ImgBaseTreeprocessor(Treeprocessor):
#     def __init__(self, md, canonical_url):
#         super().__init__(md)
#         self.canonical_url = canonical_url

#     def run(self, root):
#         for img in root.getiterator('img'):
#             src = img.get('src')
#             url = urljoin(f'{self.canonical_url}/', src)
#             img.set('src', url)

# class ImgBase(Extension):
#     def __init__(self, canonical_url=None):
#         super().__init__()
#         self.canonical_url = canonical_url

#     def extendMarkdown(self, md, md_globals):
#         # register the new treeprocessor with priority 15 (run after 'inline')
#         md.treeprocessors.register(ImgBaseTreeprocessor(md, self.canonical_url), 'imgbase', 15)

def req(path, method = 'get', data = None):
    if method == 'get':
        r = requests.get(f'{base_url}/{path}', headers=headers)
    elif method == 'post':
        r = requests.post(f'{base_url}/{path}', headers=headers, data=data)
    text = r.text
    try:
        return json.loads(text)
    except Exception as e:
        print('Error parsing response')
        print(text)
        raise e

def get_user_id():
    res = req('me')
    res = res.get('data', {})
    assert res.get('username') == 'thekevinscott'
    return res.get('id')

def parse_body(body, frontmatter):
    # extensions = [ImgBase(frontmatter.get('canonical_url'))]
    body = markdown.markdown(body)
    soup = BeautifulSoup(body, features='html.parser')
    canonical_url = frontmatter.get('canonical_url')
    for img in soup.find_all('img'):
        src = urljoin(f'{canonical_url}/', img.get('src'))
        img['src'] = src
    capt = soup.find('capt')
    capt.name = 'figcaption'

    return str(soup)


def parse_out_frontmatter(content):
    split = '---\n'
    parts = [p for p in content.split(split) if p != '']
    body = split.join(parts[1:])
    frontmatter = parts[0].split('\n')
    frontmatter = [line.split(':') for line in frontmatter]
    frontmatter = [(parts[0].strip(), ':'.join(parts[1:]).strip()) for parts in frontmatter]
    frontmatter = {key: val for key, val in frontmatter}
    for key, val in frontmatter.items():
        if key == 'tags':
            tags = [tag.strip()[1:-1] for tag in val[1:-1].split(',')]
            frontmatter[key] = tags
        else:
            frontmatter[key] = val[1:-1]
    canonical_url = urljoin('https://thekevinscott.com', frontmatter.get('url'))
    frontmatter['canonical_url'] = canonical_url
    return parse_body(body, frontmatter), frontmatter

def load_content(path_to_post):
    with open(path_to_post, 'r') as f:
        content = f.read()
    return parse_out_frontmatter(content)

def publish(user_id, path_to_post):
    content, frontmatter = load_content(path_to_post)
    url = frontmatter.get('url')
    tags = frontmatter.get('tags')
    res = req(f'users/{user_id}/posts', method='post', data={
        'publishStatus': 'draft',
        'title': frontmatter.get('title'),
        'contentFormat': 'html',
        "canonicalUrl": frontmatter.get('canonical_url'),
        'tags': frontmatter.get('tags'),
        "content": content,
    })
    print('\n\nSuccessfully published post:\n')
    print(res)
    # with open('./output.html', 'w') as f:
    #     f.write(content)

def publish_to_medium(path_to_post):
    user_id = get_user_id()
    publish(user_id, path_to_post)

if __name__ == '__main__':
    parser = argparse.ArgumentParser(description='Process some integers.')
    parser.add_argument('path_to_post')

    args = parser.parse_args()
    publish_to_medium(args.path_to_post)
