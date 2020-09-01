// https://github.com/michael-ciniawsky/postcss-load-config
module.exports = {
    "plugins": {
        "postcss-url": {},
        'postcss-cssnext': {
          'warnForDuplicates': false // 使得警告不生效
        }, // vue生效 包含autoprefixer
        "cssnano": {}, // 其中包含autoprefixer
        "postcss-import": {}
    }
}
