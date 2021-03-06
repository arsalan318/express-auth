define({ "api": [
  {
    "type": "post",
    "url": "/auth/email/signup",
    "title": "Create user",
    "name": "CreateUser",
    "group": "AuthAPI",
    "version": "0.0.0",
    "filename": "./controllers/auth.js",
    "groupTitle": "AuthAPI"
  },
  {
    "type": "get",
    "url": "/auth/facebook/signin",
    "title": "Facebook Signin",
    "name": "FacebookSignin",
    "group": "AuthAPI",
    "version": "0.0.0",
    "filename": "./controllers/auth.js",
    "groupTitle": "AuthAPI"
  },
  {
    "type": "get",
    "url": "/auth/facebook/signin/return",
    "title": "Facebook Signin return",
    "name": "FacebookSignin",
    "group": "AuthAPI",
    "version": "0.0.0",
    "filename": "./controllers/auth.js",
    "groupTitle": "AuthAPI"
  },
  {
    "type": "get",
    "url": "/auth/profile",
    "title": "Request User information",
    "name": "GetAuthUser",
    "group": "AuthAPI",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "Authorized users only"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Unique id of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "email",
            "optional": false,
            "field": "email",
            "description": "<p>Address of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>App creation date.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./controllers/auth.js",
    "groupTitle": "AuthAPI"
  },
  {
    "type": "get",
    "url": "/auth/google/signin",
    "title": "Google Signin",
    "name": "GoogleSignin",
    "group": "AuthAPI",
    "version": "0.0.0",
    "filename": "./controllers/auth.js",
    "groupTitle": "AuthAPI"
  },
  {
    "type": "get",
    "url": "/auth/google/signin/return",
    "title": "Google Signin",
    "name": "GoogleSignin",
    "group": "AuthAPI",
    "version": "0.0.0",
    "filename": "./controllers/auth.js",
    "groupTitle": "AuthAPI"
  },
  {
    "type": "post",
    "url": "/auth/email/signin",
    "title": "Sign in user",
    "name": "SigninUser",
    "group": "AuthAPI",
    "version": "0.0.0",
    "filename": "./controllers/auth.js",
    "groupTitle": "AuthAPI"
  }
] });
