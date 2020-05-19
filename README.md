# Bulk convert #hex into hsl()

## How it works

Paste a list of hex color values, comma separated. Clic 'Convert!'.

Done. 🚀 Take your list of _stylesheet-ready_ hsl colors and leave, nothing else to see here. Well, maybe share it with your friends too! 😊

### More instructions

Don't paste in special characters, hieroglyphics, plans for building a rocket, or a greasy piece of your lunch.

**Just hex colors**, **comma separated**.

It accepts lower case and upper case, and you can even leave a space after the comma. Or three.

It also accepts a single line list as well as values in multiple lines. You can omit the # if you'd like.

This would work:

```
#FADB5F, #F0B429, #CB6E17, #B44D12, #8D2B0B,
```

This would work too:

```
#fffbea,
#fff3c4,
#fce588,
#fadb5f,
#f7c948
```

This too:

```
#FfF, #F34, CE8,#Fb5, #429,    #dE1,#C6E, 44D, #82B,
```

Even this would work:

```
fF7bEa,#fFD3c4,   fCe588,b5f, #7c8
,DEe91d,   aBcDeF,158, #dE3,
```

_Please don't break it._

## On the roadmap

- Convert RGB too, both with % and without.
- Accept alpha channels: hexa (#a2e4c5**dd**) and RGBA → hsla.

## Nothing fancy here

The app is just some html (pug), css (scss) and vanilla javascript, compiled with [Gulp](https://gulpjs.com/), as if we were still living in the 19th century.
