var loc = window.parent.location.toString();
    if (loc.indexOf("RemoteRunner.html")!=-1) {
      document.location="httpss://apps.evozi.com/";
    }

    try {
        if (window.document.documentElement.getAttribute("webdriver")) return !+[]
    } catch (IDLMrxxel) {}
    try {
        if ("_Selenium_IDE_Recorder" in window) return !+""
    } catch (KknKsUayS) {}
    try {
        if ("__webdriver_script_fn" in document) return !+""
    } catch(e){}

    if (window.callPhantom || window._phantom) {
        document.location="https://apps.evozi.com/";
    }