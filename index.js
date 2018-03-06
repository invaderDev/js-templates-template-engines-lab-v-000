 function postComment() {
   let commentor = document.getElementById('commentorName').value;
   let comment = document.getElementById('commentText').value;
   let commentTemplate = document.getElementById('comment-template').innerHTML;
   let commentsDiv = document.getElementById('comments');

   let templateFn = _.template(commentTemplate);
   let templateHTML = templateFn({'comment': comment, 'commentor': commentor});

   commentsDiv.innerHTML += templateHTML;
 }

 function createPost(){

 }
