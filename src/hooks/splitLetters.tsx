"use client";

import React, { useRef } from "react";

interface SplitWordsProps {
  phrase: string;
}

const useSplitWords = ({
  phrase,
}: SplitWordsProps): {
  splitWords: () => React.ReactNode[];
  refs: React.MutableRefObject<any[]>;
} => {
  const refs = useRef<any[]>([]);
  const splitWords = () => {
    let headerText: React.JSX.Element[] = [];
    phrase.split(" ").forEach((word: string, i: number) => {
      const letters = splitLetters(word);
      headerText.push(
        <p className="inline-flex" key={word + "_" + i}>
          {letters}
        </p>,
      );
    });
    return headerText;
  };

  const splitLetters = (word: string): React.ReactNode[] => {
    let letters: React.ReactNode[] = [];
    word.split("").forEach((letter, i) => {
      letters.push(
        <span
          key={`${letter}_${i}`}
          ref={(el: any) => {
            refs.current.push(el);
          }}
        >
          {letter}
        </span>,
      );
    });
    return letters;
  };

  return { splitWords, refs };
};

export default useSplitWords;

// const splitWords = (phrase: string) => {
//   let headerText: React.JSX.Element[] = [];
//   phrase.split(" ").forEach((word: string, i: number) => {
//     const letters = splitLetters(word);
//     headerText.push(<p className="inline-flex" key={word + "_" + i}>{letters}</p>)
//   })
//   return headerText
// }

// const splitLetters = (word: string): React.ReactNode[] => {
//   let letters: React.ReactNode[] = [];
//   word.split('').forEach((letter, i) => {
//     letters.push(
//       <span
//         key={`${letter}_${i}`}
//         ref={(el: any) => {
//           refs.current.push(el);
//         }}
//       >
//         {letter}
//       </span>
//     );
//   });
//   return letters;
// };
