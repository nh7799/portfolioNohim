import Layout from "./Layout";

export default function Contact() {
  return (
    <>
      <Layout sectionName={"Contact Me"} id={"contact"}>
        <div>
          <fieldset>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter Your Name"/>
          </fieldset>
        </div>
      </Layout>
    </>
  );
}
