import { useState } from 'react';

const Accordians = () => {
  const [show, setShow] = useState(null);
  const handleState = (accordionName) => {
    setShow((prev) => (prev === accordionName ? null : accordionName));
  };
  return (
    <>
      <div className=" d-flex justify-content-center align-items-center h-screen">
        <div className="rounded w-75  bg-white text-black">
          <div className="d-flex justify-content-between">
            <div className="p-3 flex-1">
              <h4>Question Answers about Login</h4>
            </div>
            <div className="p-3 flex-2">
              {/* This is main accordian where we need to put logic  */}
              <div className="border">
                <div>
                  <h3>
                    Do I have to allow the use of cookies?{' '}
                    <span
                      className="display-6 rounded-pill"
                      onClick={() => handleState(0)}
                    >
                      +
                    </span>
                  </h3>
                  {show === 0 && (
                    <p>
                      Unicorn vinyl poutine brooklyn, next level direct trade
                      iceland. Shaman copper mug church-key coloring book,
                      whatever poutine normcore fixie cred kickstarter
                      post-ironic street art.
                    </p>
                  )}
                </div>
              </div>

              <div className="border">
                <div>
                  <h3>
                    Do I have to allow the use of cookies?{' '}
                    <span
                      className="display-6 rounded-pill"
                      onClick={() => handleState(1)}
                    >
                      +
                    </span>
                  </h3>
                  {show === 1 && (
                    <p>
                      Unicorn vinyl poutine brooklyn, next level direct trade
                      iceland. Shaman copper mug church-key coloring book,
                      whatever poutine normcore fixie cred kickstarter
                      post-ironic street art.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accordians;
