export default async function Page({ params }) {
  // fetch your blogpost by your slug
 let languages = ["python","cpp","cs","java","ruby"]

 const { slug } = await params

 if (languages.includes(slug)) {
  
  return <div>My Post: {slug}</div>
  
}
else{
  return <div>Post not Found</div>
}
  
}