import("chalk").then((ChalkModule) => {
  const chalk = ChalkModule.default;
  const sharp = require("sharp");

  const image = "./public/favicon.png";

  // pwa icons need sizes list
  const iconSizes = [64, 72,96, 192, 256, 384, 512];
  iconSizes.map((size) => {
    sharp({
      create: {
        width: size,
        height: size,
        background: { r: 255, g: 255, b: 255 },
        channels: 4,
      },
    })
      .resize(size, size)
      .toFormat("png")
      .toFile(`./public/pwa/icons/icon-${size}x${size}.png`);

    sharp({
      create: {
        width: size,
        height: size,
        background: { r: 255, g: 255, b: 255 },
        channels: 4,
      },
    })
      .resize(size, size)
      .toFormat("png")
      .toFile(`./public/pwa/mask-icons/maskable_icon_x${size}.png`);

    sharp(image)
      .resize(size, size)
      .toFormat("png")
      .toFile(`./public/pwa/icons/icon-${size}x${size}.png`)
      .then(() => {
        console.log(
          `${chalk.green.bold(
            "PWA"
          )} Icon ${size}x${size} Size created at /public/icons/ ${chalk.green.bold(
            "✓"
          )}`
        );
      })
      .catch((err) => {
        console.error(err);
      });

    sharp(image)
      .resize(size, size)
      .toFormat("png")
      .toFile(`./public/pwa/mask-icons/maskable_icon_x${size}.png`)
      .then(() => {
        console.log(
          `${chalk.green.bold(
            "PWA"
          )} Mask Icon  ${size}x${size} Size created at /public/mask-icon/ ${chalk.green.bold(
            "✓"
          )}`
        );
      })
      .catch((error) => {
        console.log(
          chalk.red(`
                Request to Get PWA Icon Failed !!
                Error in Request : ${error?.response?.status}
                Request URL : ${error?.response?.config?.url}
                Request Method: ${error?.response?.config?.method}

                `) +
            chalk.yellow(`
                # Attention : all configs saved Successfully !
                # Error :  PWA Icons not created !
                # Help : maybe favicon of website that you entred it in API Base Url step not found or not exist or url of favicon not correct !
                `)
        );
      });
  });
});
