
export default async function Comment({params}) {
const {blogId} =await  params
console.log(await params, 'comment');
    return (
        <div>All comments for blog {blogId}</div>
    )
}
