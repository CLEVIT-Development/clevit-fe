import { lazy } from "react";

import type { ITabsConstant } from "./technologies.constants";

const TensorFlow = lazy(() => import("../../../assets/vectors/technology/Tensorflow.svg"));
const OpenCV = lazy(() => import("../../../assets/vectors/technology/OpenCV.svg"));
const ML5 = lazy(() => import("../../../assets/vectors/technology/ML5.svg"));
const NLP = lazy(() => import("../../../assets/vectors/technology/NLP.svg"));
const Keras = lazy(() => import("../../../assets/vectors/technology/Keras.svg"));
const Brain = lazy(() => import("../../../assets/vectors/technology/Brain.svg"));

export const mlTechnologiesTabsConstants: ITabsConstant[] = [
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

export const mlTechnologiesConstants = {
  1: [
    { id: 1, title: "Tensorflow.js", Icon: TensorFlow },
    { id: 2, title: "OpenCV.js", Icon: OpenCV },
    { id: 3, title: "NLP.js", Icon: NLP },
    { id: 4, title: "Keras.js", Icon: Keras },
    { id: 5, title: "Brain.js", Icon: Brain },
    { id: 6, title: "ML5.js", Icon: ML5 },
  ],
  2: [
    { id: 1, title: "Tensorflow.js", Icon: TensorFlow },
    { id: 2, title: "OpenCV.js", Icon: OpenCV },
    { id: 3, title: "NLP.js", Icon: NLP },
    { id: 4, title: "Keras.js", Icon: Keras },
    { id: 5, title: "Brain.js", Icon: Brain },
    { id: 6, title: "ML5.js", Icon: ML5 },
  ],
  3: [
    { id: 1, title: "Tensorflow.js", Icon: TensorFlow },
    { id: 2, title: "OpenCV.js", Icon: OpenCV },
    { id: 3, title: "NLP.js", Icon: NLP },
    { id: 4, title: "Keras.js", Icon: Keras },
    { id: 5, title: "Brain.js", Icon: Brain },
    { id: 6, title: "ML5.js", Icon: ML5 },
  ],
  4: [
    { id: 1, title: "Tensorflow.js", Icon: TensorFlow },
    { id: 2, title: "OpenCV.js", Icon: OpenCV },
    { id: 3, title: "NLP.js", Icon: NLP },
    { id: 4, title: "Keras.js", Icon: Keras },
    { id: 5, title: "Brain.js", Icon: Brain },
    { id: 6, title: "ML5.js", Icon: ML5 },
  ],
};
