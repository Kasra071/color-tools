
ChangeLanguage('en',document.getElementById('en-lang-btn'))
function ChangeLanguage(lang,clickedElement){
    var englishTexts = document.getElementById('English-exp')
    var persianTexts = document.getElementById('Persian-exp')
    var titleTag = document.getElementById('exp-title')
    document.querySelectorAll('.LanguageSelect div').forEach(element => {
        element.classList.remove('activeLang')
    })

    switch(lang){
        case 'en':
            englishTexts.style.display = 'block'
            persianTexts.style.display = 'none'
            clickedElement.classList.add('activeLang')
            titleTag.textContent = 'What is this?'
            break;
        case 'fa':
            englishTexts.style.display = 'none'
            persianTexts.style.display = 'block'
            clickedElement.classList.add('activeLang')
            titleTag.textContent = 'این ابزار چیه؟'
            break;
    }
}

var colorDiv = document.querySelector('.ColorShower')
    , hexinput = document.querySelector(".HexContainer input")
    , red_num = document.getElementById('rN')
    , blue_num = document.getElementById("bN")
    , green_num = document.getElementById("gN")
    , red_range = document.getElementById('rR')
    , blue_range = document.getElementById("bR")
    , green_range = document.getElementById('gR')
    , rgb_text = document.querySelector(".RGBshower span")
    , html_color = document.querySelector(".BrowserColorPicker input");

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  
  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }

  function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

  function colorCync_HEX() {
    var hex_value = hexinput.value;
    if(hexToRgb(hex_value) == null) {
        hex_value = "#ffffff", hexinput.value = hex_value;
    }
    var green_hextoRGB = hexToRgb(hex_value).g
        , blue_hextoRGB = hexToRgb(hex_value).b
        , red_hextoRGB = hexToRgb(hex_value).r
    
    colorDiv.style.backgroundColor = "rgb(" + red_hextoRGB + ',' + green_hextoRGB + ',' + blue_hextoRGB + ')'
    rgb_text.textContent = "rgb(" + red_hextoRGB + ',' + green_hextoRGB + ',' + blue_hextoRGB + ')'
    red_num.value = red_hextoRGB 
    green_num.value = green_hextoRGB
    blue_num.value = blue_hextoRGB
    red_range.value = red_hextoRGB
    green_range.value = green_hextoRGB
    blue_range.value = blue_hextoRGB
    green_hextoRGB = parseInt(green_hextoRGB)
    blue_hextoRGB = parseInt(blue_hextoRGB)
    red_hextoRGB = parseInt(red_hextoRGB)
    var HEX_CODE = rgbToHex(red_hextoRGB, green_hextoRGB, blue_hextoRGB)
    html_color.value = HEX_CODE
    hexinput.value = HEX_CODE
}

function colorCync_RGB_NUMBER() {
    var greenNumVal = green_num.value
    var blueNumVal = blue_num.value
    var redNumVal = red_num.value

    redNumVal > 255 && (redNumVal = 255);
    greenNumVal > 255 && (greenNumVal = 255);
    blueNumVal > 255 && (blueNumVal = 255);

    greenNumVal = parseInt(greenNumVal), 
    blueNumVal = parseInt(blueNumVal), 
    redNumVal = parseInt(redNumVal);

    var HEX_CODE = rgbToHex(redNumVal, greenNumVal, blueNumVal);
    hexinput.value = HEX_CODE
    colorCync_HEX();
}

function colorCync_RGB_RANGE() {

    var Green_range_num = green_range.value
    var blue_range_num = blue_range.value
    var red_range_num = red_range.value

    Green_range_num = parseInt(Green_range_num)
    blue_range_num = parseInt(blue_range_num)
    red_range_num = parseInt(red_range_num)

    var HEX_VALUE = rgbToHex(red_range_num, Green_range_num, blue_range_num);
    hexinput.value = HEX_VALUE
    colorCync_HEX();
}

function colorCync_HTML() {
    hexinput.value = html_color.value
    colorCync_HEX();
}

function Random_Color() {
    var red = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    var green = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    var blue = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    green = parseInt(green)
    blue = parseInt(blue)
    red = parseInt(red);
    var HEX_VALUE = rgbToHex(red, green, blue);
    hexinput.value = HEX_VALUE
    colorCync_HEX();
}

Random_Color()