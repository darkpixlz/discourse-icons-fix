import { withPluginApi } from "discourse/lib/plugin-api";
import { loadSprites } from "discourse/lib/svg-sprite-loader"
export default {
  name: "initializer",
  initialize(){
    withPluginApi("0.8.7", api => {
      loadSprites("http://192.168.0.22:8080/svg-sprite/-/svg-1-c1066beb12cc75cc4c3bc42f218f381c862e7905.js", "fontawesome")
    });
  }
}