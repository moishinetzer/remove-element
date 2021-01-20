chrome.contextMenus.create({
  title: 'Remove Element',
  contexts: ['all'],
  onclick: function(info){
    console.log(info)
    chrome.tabs.query(
      {active: true, currentWindow: true},
      (tabs) => {
        chrome.tabs.sendMessage(
          tabs[0].id,
          {action: "open_dialog_box"}
        );
      }
    );
  }
}, function(){})