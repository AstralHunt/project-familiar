import React from 'react';

const Story = () => {
  return (
    <div id="story" className="w-screen min-h-[20rem] px-4 md:px-[10vw] py-6 md:py-12 md:scroll-mt-30">
      <div className="flex gap-16 h-full w-full">
        <div className="flex basis-1/2 flex-col justify-center items-start gap-4 w-full md:w-[50vw] text-justify">
          <h3 className="font-bold mb-5">Dementia is not a normal part of aging</h3>
          <h6 className="italic">Almost 40% of people over the age of 65 experience some form of memory loss. When there is no underlying medical condition causing this memory loss, it is known as age-associated memory impairment.</h6>
          <div className="flex justify-end w-full"><h6>- <a className="text-primary font-bold underline" target="_blank" rel="noreferrer"
            href="https://admin.alzheimer.ca/en/about-dementia/what-dementia#Dementia_causes_more_than_memory_loss">Alzheimer's Society Canada</a></h6></div>
        </div>
        <div className="flex basis-1/2 flex-col gap-8 justify-center items-start w-full">
          <h3></h3>
          <div className="flex items-end font-light justify-between  md:w-4/5">
            <p className="text-left text-lg">Average caregiver hours <br/> taking care of elderly with dementia</p>
            <div id="total"></div>
          </div>
          <div className="flex items-end font-light justify-between md:w-4/5">
            <h5 className="text-left">Compared to elderly with other health issues</h5>
            <h3>17</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
// Care partners of older adults with dementia provide 26 hours of care a week, on average. This compares to 17 hours a week for older adults with other health issues
export default Story;
