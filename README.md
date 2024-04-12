# Team Member

Yaqi Lyu, Shiqing Pan

# Link to the Demo Video:  
https://youtu.be/bkJYNCjTLV4

# Data Model and Collections

Top level collections  
collection 1: Journals  
collection 2: Notes  
collection 3: Lists  
collection 4: Users

# Necessary Settings

1. firebase index  
   firestore database index - firebase database setting
   (1)Collection id: journals; Fields indexed: visibility ascending, date descending, \_name\_ descending; query scope: Collection
   (2)Collection id: journals; Fields indexed: user ascending, date descending, \_name\_ descending; query scope: Collection

   Note: We've tried to manully make the index first in the firebase database, but it didn't work.  
    The current effective method for us is to run the program first and wait for the Firebase index error to occur. Upon encountering the error, click the URL provided in the error message, and it will automatically generate the required index. Just the save the generated index. This program requires two indexes.

2. google api  
need enable Geocoding api and Places api in Google maps

3. firestore database rules  
   service cloud.firestore {  
     match /databases/{database}/documents {  
       match /{document=**} {  
       	allow read, write: if request.auth != null;  
         allow read, update, delete: if request.auth != null && request.auth.uid == resource.data.user;  
       }  
      
    match /users/{users} {  
    	allow write: if request.auth != null && request.auth.id == resource.data;  
    }  
      
    match /journals/{journal}{  
    allow write, read: if request.auth != null;  
      allow update, delete: if request.auth != null && request.auth.uid == resource.data.user;  
    }  
  }  
}  


