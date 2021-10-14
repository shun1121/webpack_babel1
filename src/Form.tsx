import React from 'react';

const Form: React.FC = () => {
  const buildGreetingText: (date: Date) => string = (date) => {
    // 0 ~ 23 の範囲なので+1
     //const hours = date.getHours() + 1;   // <- コメントアウト
     const hours = 6;                       // 追加
    if (5 < hours && hours < 11) {
      return 'おはようございます！';
    } else if (11 < hours && hours <= 16) {
      return 'こんにちは！';
    } else {
      return 'こんばんは';;;
    }
  };

  return <h1>{buildGreetingText(new Date())}</h1>;
};
export default Form;
