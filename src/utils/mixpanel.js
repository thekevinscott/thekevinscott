const TOKEN = "0a0d38878ee707bf9e9f35da10be620c";
import mixpanel from 'mixpanel-browser';
 
mixpanel.init(TOKEN);
mixpanel.track("An event");
