# Bulk convert #hex into hsl()

## How it works

Paste a list of hex color values, comma separated. Clic 'Convert!'.

Done. 🚀 The app returns a list of _stylesheet-ready_ hsl colors 😊

### Details

It accepts lower case and upper case, and you can even leave a space after the comma. Or three. It also accepts a single line list as well as values in multiple lines. You can omit the # if you'd like.

It also accepts hex color values with an alpha channel (#RRGGBBAA or #RGBA). It will convert them to hsla.

This would work:

```md
#FADB5F, #F0B429, #CB6E17, #B44D12, #8D2B0B,
```

This would work too:

```md
#fffbea,
#fff3c4,
#fce588,
#fadb5f,
#f7c948
```

This too:

```md
#FfF, #F34, CE8,#Fb5, #429,    #dE1,#C6E, 44D, #82B,
```

Even this would work:

```md
fF7bEa,#fFD3c4,   fCe588,b5f6, #7c8
,DEe91dee,   aBcDeF,158, #dE32,
```

_Please don't break it._

## Nothing too fancy

The app is just some html (pug), css (scss) and vanilla javascript, compiled with [Parcel](https://parceljs.org/).

Also, the app is built + the resulting files copied to another repo ([my GitHub page](https://github.com/rubenvar/rubenvar.github.io)) on push, using a custom GitHub Action 🧙‍♂️.

## On the roadmap

- [ ] Convert RGB too, both with % and without.
- [x] Accept alpha channels: hexa (#a2e4c5**dd**) and RGBA → hsla.
- [ ] Improve styling...
- [ ] Maybe use newlines as separators even if there is no comma.
- [ ] Display useful error message to user if input incorrect (now only in console).
