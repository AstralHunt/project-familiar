import React from 'react';

const Story = () => {
  return (
    <div id="story" className="w-screen min-h-[20rem] px-4 md:px-[10vw] py-6 md:py-12 md:scroll-mt-30">
      <div className="flex gap-14 md:gap-20 h-full w-full">
        <div className="flex basis-1/2 flex-col justify-center items-start gap-4 w-full md:w-[50vw] text-justify">
          <h3 className="font-bold mb-5 text-left">Dementia is not a normal part of aging</h3>
          <h6 className="italic">Almost 40% of people over the age of 65 experience some form of memory loss. When there is no underlying medical condition causing this memory loss, it is known as age-associated memory impairment.</h6>
          <div className="flex justify-end w-full"><h6>- <a className="text-primary font-bold underline" target="_blank" rel="noreferrer"
            href="https://admin.alzheimer.ca/en/about-dementia/what-dementia#Dementia_causes_more_than_memory_loss">Alzheimer's Society Canada</a></h6></div>
        </div>
        <div className="flex basis-1/2 flex-col gap-3 justify-center items-start w-full">
          <h3></h3>
          <div className="flex items-end font-light justify-between ">
            <div id="total"></div>
            <p className="basis-4/5 text-left text-lg">Mean hours per week of informal care provided to seniors with dementia.  This is substantially higher than the 17 hours provided by caregivers of those without dementia.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
// Care partners of older adults with dementia provide 26 hours of care a week, on average. This compares to 17 hours a week for older adults with other health issues
export default Story;
