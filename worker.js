export default {
    async email(message, env, ctx) {
      const subject = message.headers.get('Subject') || 'No Subject';
      const from = message.headers.get('From') || 'Unknown Sender';
      const priority = 3;  // Adjust as needed

      let emailContent = "";
      try {
        emailContent = await message.text();
      } catch (error) {
        emailContent = "(No Body Content)";
      }
  
      const payload = `Subject: ${subject}\n\nBody:\n${emailContent}\n`;
      const headers = {
        //"Content-Type": "application/json",
        'Title': `New Email from ${from}`,
        'Priority': `${priority}`,
        'Tags': 'email,inbox_tray'

      }

      const ntfyUrl = "https://ntfy.example.com/example_topic"; // add your Domain and Topic Here
      
      const response = await fetch(ntfyUrl, {
        method: "POST",
        body: payload,
        headers: headers
      });
  
      if (!response.ok) {
        return new Response("Failed to send alert to ntfy server", { status: 500 });
      }
  
      return new Response("Alert sent successfully", { status: 200 });
    }
  }
