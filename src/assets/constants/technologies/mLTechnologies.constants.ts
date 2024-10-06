import { lazy } from "react";

import type { ITabsConstant } from "@/assets/constants/technologies/technologies.constants.ts";

const TensorFlow = lazy(() => import("@/assets/vectors/technology/TensorFlow.svg?react"));
const OpenCV = lazy(() => import("@/assets/vectors/technology/OpenCV.svg?react"));
const ML5 = lazy(() => import("@/assets/vectors/technology/ML5.svg?react"));
const NLP = lazy(() => import("@/assets/vectors/technology/NLP.svg?react"));
const Keras = lazy(() => import("@/assets/vectors/technology/Keras.svg?react"));
const Brain = lazy(() => import("@/assets/vectors/technology/Brain.svg?react"));

export const mLTechnologiesTabsConstants: ITabsConstant[] = [
  {
    id: 1,
    title: "Deep Learning Frameworks",
    description:
      "Our strengths include the possession of profound knowledge on deep learning frameworks including <strong>Tensorflow.js,</strong> <strong>Keras.js,</strong> and <strong>Brain.js.</strong> These frameworks are ideal for applications that need to run profound analytic requirements on prediction, image recognition and real time decision making using artificial neural networks to derive patterns from big data.",
  },
  {
    id: 2,
    title: "Computer Vision Solutions",
    description:
      "Using <strong>OpenCV.js</strong>, we make intelligent systems software solutions for machine learning that focuses on computer vision to help the business world to derive an understanding of image and video data. Computer vision models offer features such as image classification, object detection, face recognition, etc., thus making your business more responsive to image information in real time.",
  },
  {
    id: 3,
    title: "Natural Language Processing",
    description:
      "We build Natural Language Processing (NLP) solutions using <strong>NLP.js</strong>, enabling apps to perform tasks including sentiment analysis, language identification, chatbot creation as well as text analysis. These NLP models are intended for enabling machines to read, evaluate, and produce human language, enhancing the user experience and automating the interactions.",
  },
  {
    id: 4,
    title: "Machine Learning for Creative AI",
    description:
      "We use <strong>ML5.js</strong> to build the models tailored specifically to the creation of creative AI applications, as it enables ML into the interactivity of web and art projects. No matter if it is used for interactive graphics and data visualization or for creating ML5. js is convenient for inventive and liberal use of ML activities.",
  },
];

export const mLTechnologiesConstants = {
  1: [
    { id: 1, title: "TensorFlow.js", Icon: TensorFlow },
    { id: 1, title: "OpenCV.js", Icon: OpenCV },
    { id: 1, title: "NLP.js", Icon: NLP },
    { id: 1, title: "Keras.js", Icon: Keras },
    { id: 1, title: "Brain.js", Icon: Brain },
    { id: 1, title: "ML5.js", Icon: ML5 },
  ],
  2: [
    { id: 1, title: "TensorFlow.js", Icon: TensorFlow },
    { id: 1, title: "OpenCV.js", Icon: OpenCV },
    { id: 1, title: "NLP.js", Icon: NLP },
    { id: 1, title: "Keras.js", Icon: Keras },
    { id: 1, title: "Brain.js", Icon: Brain },
    { id: 1, title: "ML5.js", Icon: ML5 },
  ],
  3: [
    { id: 1, title: "TensorFlow.js", Icon: TensorFlow },
    { id: 1, title: "OpenCV.js", Icon: OpenCV },
    { id: 1, title: "NLP.js", Icon: NLP },
    { id: 1, title: "Keras.js", Icon: Keras },
    { id: 1, title: "Brain.js", Icon: Brain },
    { id: 1, title: "ML5.js", Icon: ML5 },
  ],
  4: [
    { id: 1, title: "TensorFlow.js", Icon: TensorFlow },
    { id: 1, title: "OpenCV.js", Icon: OpenCV },
    { id: 1, title: "NLP.js", Icon: NLP },
    { id: 1, title: "Keras.js", Icon: Keras },
    { id: 1, title: "Brain.js", Icon: Brain },
    { id: 1, title: "ML5.js", Icon: ML5 },
  ],
};
