const easyimg = require('easyimage');
const glob = require('glob');

glob('../public/images/*.jpg', {}, (err, files) =>
  files.forEach(src =>
    easyimg.thumbnail({
      src,
      dst: `../public/images/thumbnails/${src.split('/').pop()}`,
      height: 800,
      quality: 70,
      width: 800,
    }).then(
      img => console.log('made thumbnail for', img),
      console.error
    )
  )
);
