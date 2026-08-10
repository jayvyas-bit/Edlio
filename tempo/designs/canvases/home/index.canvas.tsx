// @tempo-home — Tempo home canvas (the workspace Run button opens this). Managed marker; do not remove.
//
// One storyboard rendering your app's home route ("/"). Run (workspace header)
// opens this canvas beside your app's dev-server logs. Set the app dev command
// (set_app_dev_command) so the "/" route renders here.

import { Canvas, RouteStoryboard } from "tempo-sdk/canvas";

export default function HomeCanvas() {
  return (
    <Canvas name="Home" backgroundColor={"oklch(0.248 0.0062 0)"}>
      <RouteStoryboard
        id="Home"
        name="Home (/)"
        route="/"
        layout={{ x: 96, y: 452, width: 1280, height: 4200 }}
      />
    </Canvas>
  );
}
