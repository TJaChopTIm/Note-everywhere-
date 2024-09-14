chrome.action.onClicked.addListener((tab) => {
    // Khi người dùng nhấp vào biểu tượng extension, mở giao diện popup (popup.html)
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: showPopup
    });
  });
  
  // Hàm để hiển thị giao diện popup
  function showPopup() {
    // Có thể thêm các thao tác bổ sung khi popup được mở
    console.log("Popup is displayed.");
  }
  
  // Xử lý sự kiện khi extension được cài đặt lần đầu hoặc cập nhật
  chrome.runtime.onInstalled.addListener(() => {
    console.log("Extension installed or updated.");
  });
  