
export default async function CommentId({params}) {
const {commentId, blogId} =await  params
console.log(await params, 'commentID');
    return (
        <div>For blog {blogId} comment id {commentId} </div>
    )
}
