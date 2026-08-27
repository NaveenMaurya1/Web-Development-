export default async function Page({ params }) {
  // fetch your blogpost by your slug
  const { val } = await params;

  console.log(val);

 return <div> I am about page check console</div>
  
}