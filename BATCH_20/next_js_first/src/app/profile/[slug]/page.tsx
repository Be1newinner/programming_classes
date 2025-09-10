export default async function ProfileOne({ params }) {
  const { slug } = await params;

  console.log(slug);

  return <div>{}</div>;
}
