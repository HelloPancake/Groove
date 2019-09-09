# Welcome to Groove!
Groove is a full stack social blogging website designed to resemble Tumblr, one of the most popular blogging platforms for many different communities and interests.

## Features
-   User Authentication
    -   User Login/Register
    -   Demo User
-   Post and share different type of media files including:
	- Images
	- Video
	- Audio
	- Text
-   Like other posts that you may enjoy or find interesting
-	Check out posts made only by your favorite users

## Implementation

**Posts**

The Dashboard gives an option of which media type you wish to post on the feed.

![enter image description here](https://lh3.googleusercontent.com/uvjgIV8Bw4DobfbBEvB1Gvl59hr31QigcRYsW7ufHDq9cJ1xNOGEe_JJOCNo2-6BrOdRf24Zj_uu)

After selecting a post option - a modal will pop up allowing you to load a media file, preview it in the appropriate player, and give you a change to write down any messaged in the body before storage in the AWS S3 bucket.

![enter image description here](https://lh3.googleusercontent.com/Ogh76jtBrkuLka085D1njJeRsDopjUETR_StanOf2U7FpqQsmjXPwmeFll0_kvWm_mGony-nMiZc)

**Likes**

At the bottom of each post is a likes button as well as a likes counter keeping tracking through a backend joins table of how many likes a certain post accrues and who has liked the post

![enter image description here](https://lh3.googleusercontent.com/7IaM5gp_jifQJc0b-GWEJx9A2G0HEY1hP6wwzaXcpC_XfMMlwdEvpuSutxWgh4SRqbUvZFofsnpw)
## Technologies Used
-   **Ruby on Rails**  to implement backend framework
-   **PostgreSQL**  for the database
- **Amazon Web Services** for efficient handling of media asset storage
-   **React**  for the Frontend using  **Redux**  as the state manager
-   **jQuery**  AJAX to access backend through  **Thunk**  actions
-   **SASS/CSS**  for styling

## Planned Future Features
- **Direct Messaging**
- **Profile Pictures**
- **Ability to Follow your favorite users**
