import { useState } from "react";
import { Button } from "@material-ui/core";
import { Image } from "@material-ui/icons";

export default function ImagePicker() {
  const [image, setimage] = useState("");
  return (
    <section className="image_picker">
      <div
        className="image_picker_view"
        style={{ backgroundImage: `url(${image})` }}
      >
        {image !== "" ? <></> : <Image />}
      </div>
      <input
        type="file"
        id="profile_pic"
        required
        accept=".png, .jpg, .jpeg"
        className="image_picker_input"
        onChange={(e) => {
          if (e.target.files.length <= 0) return;
          let file = e.target.files[0];
          let reader = new FileReader();
          reader.onloadend = function () {
            setimage(reader.result);
          };
          reader.readAsDataURL(file);
        }}
      />
      <Button className="image_picker_btn">
        <label htmlFor="profile_pic" className="image_picker_label">
          set profile picture
        </label>
      </Button>
    </section>
  );
}
