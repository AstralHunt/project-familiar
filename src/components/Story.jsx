import React from 'react';

const Story = () => {
  return (
    <div id="story" className="w-screen min-h-[20rem] px-4 md:px-[10vw] py-6 md:py-12 md:scroll-mt-30">
      <div className=" h-full w-full">
        <h5 className="text-sm md:text-base lg:text-lg py-6 md:py-8 max-w-3xl mx-auto text-center">Care partners of older
          adults with dementia provide 26 hours of care a week, on average. This compares to 17 hours a week for older
          adults with other health issues.</h5>
        <div className="flex flex-col md:flex-row justify-around gap-8 md:gap-4">
          <div className="flex flex-col items-center gap-4 md:gap-12">
            <div id="total"></div>
            <h6>asdad</h6>
          </div>
          <div className="flex flex-col items-center gap-4 md:gap-12">
            <div id="total"></div>
            <h6>asdad</h6>
          </div>
          <div className="flex flex-col items-center gap-4 md:gap-12">
          <div id="total"></div>
            <h6>asdad</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
