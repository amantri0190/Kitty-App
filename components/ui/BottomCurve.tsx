import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

export default function BottomCurve() {
  return (
    <View style={{ position: "absolute", bottom: -1, width: "100%" }}>
      <Svg
        width="100%"
        height={80}
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <Path
          fill="#FFFDF8"
          d="M0,224L48,208C96,192,192,160,288,165.3C384,171,480,213,576,224C672,235,768,213,864,197.3C960,181,1056,171,1152,176C1248,181,1344,203,1392,213.3L1440,224L1440,320L0,320Z"
        />
      </Svg>
    </View>
  );
}
