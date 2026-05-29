import Button from "../components/Button";
import PdfViewer from "../components/PdfViewer";
import Layout from "./Layout";

export default function Contact() {
  return (
    <>
      <Layout sectionName={"Contact Me"} id={"contact"}>
        <div className="flex flex-col gap-y-10 justify-center items-center rounded-lg">
          <form
            action="https://formspree.io/f/mredjrrp"
            method="POST"
            className="card-comp flex w-full max-w-2xl flex-col gap-6 rounded-xl p-4 sm:p-7"
          >
            <fieldset>
              {" "}
              <label htmlFor="first" className="text-sm font-semibold tracking-wide text-gold uppercase">
                Firstname
              </label>
              <input
                className="premium-input mt-3 block w-full font-medium"
                type="text"
                name="first"
                placeholder="John"
                id=""
                required
              />
            </fieldset>

            <fieldset>
              <label htmlFor="last" className="text-sm font-semibold tracking-wide text-gold uppercase">
                Lastname
              </label>
              <input
                className="premium-input mt-3 block w-full font-medium"
                type="text"
                name="last"
                placeholder="doe"
                id=""
              />
            </fieldset>

            <fieldset>
              <label htmlFor="email" className="text-sm font-semibold tracking-wide text-gold uppercase">
                Email
              </label>
              <input
                className="premium-input mt-3 block w-full font-medium"
                type="email"
                name="email"
                id="email"
                placeholder="johndoe@email.com"
                required
              />
            </fieldset>

            <Button
              type={"submit"}
              className="premium-btn w-full border-0 shadow-none"
              onClick={(e) => {
                const button = e.currentTarget;
                button.textContent = "please wait...";

                setTimeout(() => {
                  button.textContent = "Submit";
                  button.classList.add("disabled");
                }, 3000);
              }}
            >
              Contact me
            </Button>
          </form>
        </div>
      </Layout>
    </>
  );
}
