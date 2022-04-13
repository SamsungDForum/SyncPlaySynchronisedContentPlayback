# Syncplay Sample Application 

This app shows the demo for Syncplay functionality. 

## How to use the Syncplay sample application

1. Copy the vidoe in the USB root folder and plug it in LFD.
2. Run the app on your LFD.
3. Check available options on the screen.

## Supported platforms

Since Tizen 6.5


## Prerequisites and limitations

1. Make sure <script type="text/javascript" src="$WEBAPIS/webapis/webapis.js"></script> is included in index.html and <tizen:privilege name="http://developer.samsung.com/privilege/syncplay"/> in config.xml
2. App has to be signed with Samsung certificate with Partner privilege level
3. Video playback can be synchronized only when all displays are in same network
4. Known Limitations comes from the fact of video usage. please refer to SDF article about videos
5. Only video playback is supported.

## Privileges and metadata

In order to use SyncPlay API the following privilege must be included in `config.xml`:

```xml
<tizen:privilege name="http://developer.samsung.com/privilege/syncplay"/>
```

Partner level privilege of certificate is supported.

### File structure

```
SyncPlay/ - PlayerAvplay sample app root folder
│
├── fonts/ - fonts used by this app
│   │
│   └── SamsungOneUI-400.ttf - font used in application
│  
│
├── css/ - styles used in the application
│   │
│   └── style.css - style for application's template
│
├── js/ - scripts used in the application
│   │
│   └── main.js - main application script
│
├── config.xml - application's configuration file
├── index.html - main document
└── README.md - this file
```


## Copyright and License

**Copyright 2021 Samsung Electronics, Inc.**

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
