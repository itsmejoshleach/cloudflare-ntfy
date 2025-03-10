# Cloudflare Email Worker For sending to Ntfy server

### What it says on the tin.
### It takes an email and forwards it to a pre-existing ntfy server for alerts.


## Message Format:
```
📧 📥 New Email from "Example Email Name" <example@email.com>
Subject: This is a test

Body:
This is test body data
```


## Adaptations:
You need to add your Ntfy Server and topic here (Line 23):
```
const ntfyUrl = "https://ntfy.example.com/example_topic"; // add your Domain and Topic Here
```

If you want to change your priority then update it here (Line 5):
```
const priority = 3;  // Adjust as needed
```
