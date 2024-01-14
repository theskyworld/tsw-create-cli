#! /usr/bin/env node

import { program } from "commander";
import require from "./utils/useRequire.js";

// require的路径值应当相对于useRequire.js文件的路径进行填写
program.name("tsw").version(`v${require("../../package.json").version}`); // 配置动态版本号

program.parse(process.argv);
