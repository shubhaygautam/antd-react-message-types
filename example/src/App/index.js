import React from "react";
import {
  TextMessage,
  TextWithMedia,
  CarouselWithButtons,
  FormMessage,
  UploadedDocument,
} from "@oriserve-dashboard/react-message-types";

import styles from "./App.module.scss";

import { simpleText, htmlText, NLPSnapshotText } from "../data/messages/text";
import { carouselWithButtons } from "../data/messages/carousel";
import { simpleForm } from "../data/messages/form";
import { uploadedFile } from "../data/messages/uploadedFile"
import {
  imageWithButton,
  videoWithButton,
  checkboxWithMedia,
  listWithMedia,
  listMessage,
  listWithButtons
} from "../data/messages/textWithMedia";

import Chatbot from "./components/Chatbot";
import Bubble from "./components/Bubble";

const App = () => {
  return (
    <div className={styles.container}>
      <Chatbot title="React Message Types">
         <Bubble text="Simple Form">
          <FormMessage
            message={simpleForm}
            onSubmit={data => console.log("formMessage", data)}
          />
        </Bubble>
        <Bubble text="simple text">
          <TextMessage message={simpleText} preferLang="hindi" />
        </Bubble>
        <Bubble text="text with NLP Snapshot">
          <TextMessage
            message={NLPSnapshotText}
            preferLang="hindi"
            showNlpSnapshot
          />
        </Bubble>
        <Bubble text="HTML text">
          <TextMessage message={htmlText} preferLang="hindi" />
        </Bubble>
        <Bubble text="Image with buttons">
          <TextWithMedia message={imageWithButton} preferLang="hindi" />
        </Bubble>
        <Bubble text="Video with buttons">
          <TextWithMedia message={videoWithButton} />
        </Bubble>
        <Bubble text="Checkbox with Image">
          <TextWithMedia message={checkboxWithMedia} />
        </Bubble>
        <Bubble text="Simple list">
          <TextWithMedia message={listMessage} />
        </Bubble>
        <Bubble text="List with buttons">
          <TextWithMedia message={listWithButtons} />
        </Bubble>
        <Bubble text="List with media">
          <TextWithMedia message={listWithMedia} />
        </Bubble>
        <Bubble text="Carousel with buttons">
          <CarouselWithButtons
            message={carouselWithButtons}
            preferLang="hindi"
          />
        </Bubble>
        <Bubble text="Uploaded File">
          <UploadedDocument message={uploadedFile}/>
        </Bubble>
      </Chatbot>
    </div>
  );
};

export default App;
