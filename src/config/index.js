import Context from "@/utils/Context";

import DevConfig from "./dev.config";
import ProdConfig from "./prod.config";

const context = new Context();
context.use([new DevConfig(), new ProdConfig()]);

export default {
  context,
  currentConfig: context.getContext(`$${process.env.NODE_ENV}`),
};
