import { Link } from "react-router-dom";

const How = () => {
  return (
    <div className="text-center pb-10 mx-4">
      <h2 className="mb-6 text-3xl font-semibold">How to hire on Skill Sync</h2>
      <div className="align-middle text-left grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-6">
        <div className="flex lg:flex-col">
          <img className="h-36 w-32" src="https://i.ibb.co/7Vkqpkn/Screenshot-2023-11-07-211242-removebg-preview.png" alt="" />
          <div>
            <h2 className="text-lg font-semibold mb-2">Post a job (it’s free)</h2>
            <p className="text-sm">
              Tell us what you need. Provide as many details as possible, but
              don’t worry about getting it perfect.
            </p>
          </div>
        </div>
        <div  className="flex lg:flex-col">
          <img className="h-36 w-32" src="https://i.ibb.co/f2Scbmy/Screenshot-2023-11-07-214229-removebg-preview.png" alt="" />
          <div>
            <h2 className="text-lg font-semibold mb-2">Talent comes to you</h2>
            <p className="text-sm">
              Get qualified proposals within 24 hours, and meet the candidates
              you’re excited about. Hire as soon as you’re ready.
            </p>
          </div>
        </div>
        <div  className="flex lg:flex-col">
          <img className="h-36 w-32" src="https://i.ibb.co/pbQvC51/Screenshot-2023-11-07-214535-removebg-preview.png" alt="" />
          <div>
            <h2 className="text-lg font-semibold mb-2">Collaborate easily</h2>
            <p className="text-sm">
              Use Skill-Sync to chat or video call, share files, and track project
              progress right from the app.
            </p>
          </div>
        </div>
        <div  className="flex lg:flex-col">
          <img className="h-36 w-32" src="https://i.ibb.co/pXXmDZ8/Screenshot-2023-11-07-214708-removebg-preview.png" alt="" />
          <div>
            <h2 className="text-lg font-semibold mb-2">Payment simplified </h2>
            <p className="text-sm">
              Receive invoices and make payments through Skill-Sync. Only pay for
              work you authorize.
            </p>
          </div>
        </div>
      </div>
      <Link to='/registration' className="btn bg-orange-600 border-none mt-6 hover:bg-orange-400 text-slate-200">Get Started</Link>
    </div>
  );
};

export default How;
