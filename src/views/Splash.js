import React from "react";

import AnimatedSplash from "react-native-animated-splash-screen";
export default function Splash() {
  return (
    <AnimatedSplash
      translucent={true}
      isLoaded={this.state.isLoaded}
      logoImage={require("../images/logo.png")}
      backgroundColor={"#262626"}
      logoHeight={150}
      logoWidth={150}
    >
      <App />
    </AnimatedSplash>
  );
}
