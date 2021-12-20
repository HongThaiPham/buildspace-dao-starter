import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x530B60e99573d2Ab84EEc8708343785c1dd4881F"
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Leo Pham Avatar",
        description: "This NFT will give you access to ArtistDAO!",
        image: readFileSync("scripts/assets/artist.jpeg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
