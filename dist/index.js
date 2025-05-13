'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var antd = require('antd');
var icons = require('@ant-design/icons');

var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

var MessageWrapper = function MessageWrapper(_ref) {
  var message = _ref.message,
      preferLang = _ref.preferLang,
      ChildComponent = _ref.component,
      primaryMessageProps = _ref.primaryMessageProps,
      rest = objectWithoutProperties(_ref, ['message', 'preferLang', 'component', 'primaryMessageProps']);

  if (message.payload && Array.isArray(message.payload) && message.payload.length > 0) {
    return message.payload.map(function (item, index) {
      if (item.lang === preferLang || index === 0) {
        return React__default.createElement(
          React__default.Fragment,
          { key: index },
          index > 0 && React__default.createElement(
            'div',
            {
              className: 'ori-relative ori-tb-mrgn-5 ori-flex ori-flex-jc',
              style: {
                height: '20px'
              }
            },
            React__default.createElement('span', {
              className: 'ori-absolute ori-bg-default',
              style: {
                left: 0,
                right: 0,
                top: '50%',
                height: '1px',
                backgroundColor: '#e6e6e6'
              }
            }),
            React__default.createElement(
              'span',
              {
                className: 'ori-absolute ori-bg-default ori-font-default ori-lr-pad-5 ori-border-default ori-capitalize ori-border-radius-base'
              },
              item.lang
            )
          ),
          React__default.createElement(ChildComponent, _extends({
            payload: item,
            message: message
          }, index === 0 && primaryMessageProps ? primaryMessageProps : {}, rest))
        );
      }
    });
  }

  return React__default.createElement(ChildComponent, _extends({
    payload: message.payload,
    message: message
  }, primaryMessageProps || {}, rest));
};

MessageWrapper.propTypes = {
  message: PropTypes.object.isRequired,
  component: PropTypes.func.isRequired,
  preferLang: PropTypes.string,
  primaryMessageProps: PropTypes.object
};

MessageWrapper.defaultProps = {
  component: null,
  preferLang: ''
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".TextBody-module_textBodyContainer__3iVP2 {\n  position: relative; }\n\n.TextBody-module_messageWrapper__3lmiT {\n  word-break: break-word; }\n\n.TextBody-module_cursorPointer__Qu1QU {\n  cursor: pointer; }\n\n.TextBody-module_WSPreWrap__1lwh1 {\n  white-space: pre-wrap; }\n\n.TextBody-module_overlayContainer__Sjuj2 {\n  position: absolute;\n  top: 0;\n  left: 0;\n  color: transparent;\n  pointer-events: none;\n  word-break: break-word; }\n\n.TextBody-module_defaultEntity__TSbvi {\n  background-color: #0000ff; }\n\n.TextBody-module_entity-0__2x3Jv {\n  background-color: #FF00FF; }\n\n.TextBody-module_entity-1__1AzXX {\n  background-color: #4CB25C; }\n\n.TextBody-module_entity-2__1MoZN {\n  background-color: #f5a623; }\n\n.TextBody-module_entity-3__1uMav {\n  background-color: #FF0000; }\n\n.TextBody-module_entity-4__3nH4a {\n  background-color: #4da1ff; }\n\n.TextBody-module_entity-5__3pOHw {\n  background-color: #9400D3; }\n\n.TextBody-module_entity-6__3vBSN {\n  background-color: #29bb9c; }\n";
var styles = { "textBodyContainer": "TextBody-module_textBodyContainer__3iVP2", "messageWrapper": "TextBody-module_messageWrapper__3lmiT", "cursorPointer": "TextBody-module_cursorPointer__Qu1QU", "WSPreWrap": "TextBody-module_WSPreWrap__1lwh1", "overlayContainer": "TextBody-module_overlayContainer__Sjuj2", "defaultEntity": "TextBody-module_defaultEntity__TSbvi", "entity-0": "TextBody-module_entity-0__2x3Jv", "entity-1": "TextBody-module_entity-1__1AzXX", "entity-2": "TextBody-module_entity-2__1MoZN", "entity-3": "TextBody-module_entity-3__1uMav", "entity-4": "TextBody-module_entity-4__3nH4a", "entity-5": "TextBody-module_entity-5__3pOHw", "entity-6": "TextBody-module_entity-6__3vBSN" };
styleInject(css);

/* eslint-disable no-undef */
/* eslint-disable no-useless-escape */

var linkify = function linkify(inputText) {
  var linkifiedText = inputText;

  // URLs starting with http://, https://, or ftp://
  var urlPattern = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
  linkifiedText = inputText.replace(urlPattern, '<a href="$1" target="_blank">$1</a>');

  // URLs starting with "www." (without // before it, or it'd re-link the ones done above).
  var pseudoUrlPattern = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
  linkifiedText = linkifiedText.replace(pseudoUrlPattern, '$1<a href="http://$2" target="_blank">$2</a>');

  // Change email addresses to mailto:: links.
  var emailPattern = /(([a-zA-Z0-9\-\_\.])+@[a-zA-Z\_]+?(\.[a-zA-Z]{2,6})+)/gim;
  linkifiedText = linkifiedText.replace(emailPattern, '<a href="mailto:$1">$1</a>');
  return linkifiedText;
};

/*
  @param {obj} obj
  check is Object is empty or not
  return bool
*/

var isEmptyObject = function isEmptyObject(obj) {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      return false;
    }
  }
  return true;
};

/*
  @param string
  check string is email or not
  return bool
*/

var isEmail = function isEmail(address) {
  var regex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
  return regex.test(address);
};

var getFormattedSize = function getFormattedSize(bytes) {
  var decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

  if (!bytes) return '0 Bytes';
  var k = 1024;
  var dm = decimals < 0 ? 0 : decimals;
  var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  var i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};

var getFormattedFileType = function getFormattedFileType(fileType) {
  if (!fileType) return null;
  if (fileType.indexOf('image/') !== -1) return 'Image';
  if (fileType === 'application/pdf') return 'PDF';
};

var TextBody = function TextBody(_ref) {
  var message = _ref.message,
      payload = _ref.payload,
      showNlpSnapshot = _ref.showNlpSnapshot,
      disableHtmlParser = _ref.disableHtmlParser,
      editMessageNLPSnapshot = _ref.editMessageNLPSnapshot;

  var _useState = React.useState(false),
      _useState2 = slicedToArray(_useState, 2),
      tooltipVisible = _useState2[0],
      setTooltipVisible = _useState2[1];

  var showTooltip = function showTooltip() {
    return setTooltipVisible(true);
  };

  var hideTooltip = function hideTooltip() {
    return setTooltipVisible(false);
  };

  var handleTextClick = function handleTextClick() {
    if (editMessageNLPSnapshot && showNlpSnapshot && message.NLPSnapshot && !isEmptyObject(message.NLPSnapshot)) {
      editMessageNLPSnapshot(message);
    }
  };

  var renderHighLightedText = function renderHighLightedText(text, entity, key) {
    var start = text.substr(0, entity.startIndex);
    var value = text.substr(entity.startIndex, entity.endIndex - entity.startIndex + 1);
    var end = text.substr(entity.endIndex + 1);

    return React__default.createElement(
      'div',
      { key: key, className: styles.overlayContainer },
      React__default.createElement(
        'span',
        null,
        start
      ),
      React__default.createElement(
        antd.Tooltip,
        {
          overlayClassName: 'ori-mt-tooltipOverlay',
          title: entity.type,
          placement: key % 3 === 0 ? 'bottomRight' : key % 3 === 1 ? 'topRight' : 'bottomLeft',
          visible: tooltipVisible
        },
        React__default.createElement(
          'span',
          {
            className: styles.defaultEntity + ' ' + styles['entity-' + key],
            style: {
              opacity: '0.3'
            }
          },
          value
        )
      ),
      React__default.createElement(
        'span',
        null,
        end
      )
    );
  };

  if (Array.isArray(payload.text) && payload.text.length > 0) {
    return payload.text.map(function (text, index) {
      return React__default.createElement(
        'div',
        { key: index, className: styles.textBodyContainer },
        React__default.createElement('div', {
          className: 'ori-b-border-light ori-tb-pad-3',
          dangerouslySetInnerHTML: { __html: text }
        })
      );
    });
  } else {
    var intentVisibility = showNlpSnapshot && message.NLPSnapshot && !isEmptyObject(message.NLPSnapshot);
    var msgText = message.containsHTML || disableHtmlParser ? payload.text : linkify(payload.text);
    return React__default.createElement(
      'div',
      {
        className: styles.textBodyContainer,
        onMouseOver: showTooltip,
        onMouseOut: hideTooltip
      },
      React__default.createElement(
        'div',
        {
          className: styles.messageWrapper + '\n          ' + (intentVisibility ? styles.cursorPointer : '') + '\n          ' + (!message.containsHTML ? styles.WSPreWrap : ''),
          onClick: handleTextClick
        },
        disableHtmlParser ? msgText : React__default.createElement('span', { dangerouslySetInnerHTML: { __html: msgText } })
      ),
      !message.containsHtml && intentVisibility && message.NLPSnapshot.entitySnapshot && message.NLPSnapshot.entitySnapshot.length > 0 && message.NLPSnapshot.entitySnapshot.map(function (entity, index) {
        return renderHighLightedText(payload.text, entity, index);
      })
    );
  }
};

TextBody.propTypes = {
  payload: PropTypes.object.isRequired,
  message: PropTypes.object.isRequired,
  showNlpSnapshot: PropTypes.bool,
  editMessageNLPSnapshot: PropTypes.func,
  disableHtmlParser: PropTypes.bool
};

TextBody.defaultProps = {
  showNlpSnapshot: false,
  disableHtmlParser: false
};

var TextMessage = function TextMessage(_ref) {
  var preferLang = _ref.preferLang,
      message = _ref.message,
      showNlpSnapshot = _ref.showNlpSnapshot,
      disableHtmlParser = _ref.disableHtmlParser,
      editMessageNLPSnapshot = _ref.editMessageNLPSnapshot;

  return React__default.createElement(MessageWrapper, {
    message: message,
    preferLang: preferLang,
    component: TextBody,
    primaryMessageProps: {
      showNlpSnapshot: showNlpSnapshot,
      disableHtmlParser: disableHtmlParser,
      editMessageNLPSnapshot: editMessageNLPSnapshot
    }
  });
};

TextMessage.propTypes = {
  preferLang: PropTypes.string,
  message: PropTypes.object.isRequired,
  showNlpSnapshot: PropTypes.bool,
  editMessageNLPSnapshot: PropTypes.func,
  disableHtmlParser: PropTypes.bool
};

TextMessage.defaultProps = {
  showNlpSnapshot: false,
  disableHtmlParser: false
};

var css$1 = ".TextWithMediaBody-module_textWithMediaContainer__klUH8 {\n  word-break: break-word; }\n\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  .TextWithMediaBody-module_ie10upTextWithMediaContainer__18kcd {\n    max-width: 265px; } }\n";
var styles$1 = { "textWithMediaContainer": "TextWithMediaBody-module_textWithMediaContainer__klUH8", "ie10upTextWithMediaContainer": "TextWithMediaBody-module_ie10upTextWithMediaContainer__18kcd" };
styleInject(css$1);

var Buttons = React.lazy(function () {
  return Promise.resolve().then(function () { return index; });
});
var Header = React.lazy(function () {
  return Promise.resolve().then(function () { return index$1; });
});
var ImageItem = React.lazy(function () {
  return Promise.resolve().then(function () { return index$2; });
});
var CheckboxGroup = React.lazy(function () {
  return Promise.resolve().then(function () { return index$3; });
});
var ListItem = React.lazy(function () {
  return Promise.resolve().then(function () { return index$4; });
});

var TextWithMediaBody = function TextWithMediaBody(_ref) {
  var payload = _ref.payload,
      message = _ref.message,
      handleMsgBtnClick = _ref.handleMsgBtnClick,
      btnHidden = _ref.btnHidden,
      btnDisabled = _ref.btnDisabled,
      checkboxDisabled = _ref.checkboxDisabled,
      onSubmitCheckbox = _ref.onSubmitCheckbox;

  return React__default.createElement(
    'div',
    {
      className: styles$1.textWithMediaContainer + ' ' + styles$1.ie10upTextWithMediaContainer
    },
    payload.url && React__default.createElement('iframe', {
      title: 'video-message',
      width: '100%',
      src: payload.url,
      frameBorder: '0',
      allow: 'autoplay; encrypted-media',
      allowFullScreen: true
    }),
    React__default.createElement(
      React.Suspense,
      { fallback: null },
      payload.imageUrl && React__default.createElement(ImageItem, { src: payload.imageUrl }),
      (payload.title || payload.subtitle) && React__default.createElement(Header, { title: payload.title, subtitle: payload.subtitle }),
      payload.options && payload.options.length > 0 && React__default.createElement(CheckboxGroup, {
        options: payload.options,
        disabled: checkboxDisabled,
        onSubmit: onSubmitCheckbox
      }),
      payload.list && payload.list.length > 0 && React__default.createElement(ListItem, { list: payload.list }),
      !btnHidden && payload.buttons && payload.buttons.length > 0 && React__default.createElement(Buttons, {
        buttons: payload.buttons,
        message: message,
        disabled: btnDisabled,
        onClick: handleMsgBtnClick
      })
    )
  );
};

TextWithMediaBody.propTypes = {
  payload: PropTypes.object,
  message: PropTypes.object.isRequired,
  handleMsgBtnClick: PropTypes.func,
  btnDisabled: PropTypes.bool,
  btnHidden: PropTypes.bool,
  checkboxDisabled: PropTypes.bool,
  onSubmitCheckbox: PropTypes.func
};

TextWithMediaBody.defaultProps = {
  btnDisabled: false,
  btnHidden: false,
  checkboxDisabled: false
};

var TextWithMedia = function TextWithMedia(_ref) {
  var preferLang = _ref.preferLang,
      message = _ref.message,
      handleMsgBtnClick = _ref.handleMsgBtnClick,
      btnHidden = _ref.btnHidden,
      btnDisabled = _ref.btnDisabled,
      checkboxDisabled = _ref.checkboxDisabled,
      onSubmitCheckbox = _ref.onSubmitCheckbox;
  return React__default.createElement(MessageWrapper, {
    message: message,
    preferLang: preferLang,
    component: TextWithMediaBody,
    btnDisabled: btnDisabled,
    btnHidden: btnHidden,
    checkboxDisabled: checkboxDisabled,
    handleMsgBtnClick: handleMsgBtnClick,
    onSubmitCheckbox: onSubmitCheckbox
  });
};

TextWithMedia.propTypes = {
  message: PropTypes.object.isRequired,
  handleMsgBtnClick: PropTypes.func,
  btnDisabled: PropTypes.bool,
  btnHidden: PropTypes.bool,
  checkboxDisabled: PropTypes.bool,
  onSubmitCheckbox: PropTypes.func,
  preferLang: PropTypes.string
};

TextWithMedia.defaultProps = {
  btnDisabled: false,
  btnHidden: false,
  checkboxDisabled: false
};

var css$2 = ".CarouselBody-module_carouselBodyContainer__3vLQl {\n  word-break: break-all; }\n\n.CarouselBody-module_carousel__3dzuM {\n  margin-bottom: 30px; }\n\n.CarouselBody-module_slickDots__1vylU {\n  bottom: -10px !important;\n  margin: 0 !important;\n  overflow-x: hidden; }\n  .CarouselBody-module_slickDots__1vylU li button,\n  .CarouselBody-module_slickDots__1vylU .CarouselBody-module_slick-active__1ZMA1 button {\n    background-color: #383434 !important; }\n";
var styles$2 = { "carouselBodyContainer": "CarouselBody-module_carouselBodyContainer__3vLQl", "carousel": "CarouselBody-module_carousel__3dzuM", "slickDots": "CarouselBody-module_slickDots__1vylU", "slick-active": "CarouselBody-module_slick-active__1ZMA1" };
styleInject(css$2);

var css$3 = ".CarouselItem-module_carouselItem__2r5si {\n  width: 100%;\n  background-color: #efeff44d;\n  border: 1px solid #efeff4; }\n\n.CarouselItem-module_imageContainer__3knwg {\n  height: 200px;\n  background-color: #000000;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center; }\n";
var styles$3 = { "carouselItem": "CarouselItem-module_carouselItem__2r5si", "imageContainer": "CarouselItem-module_imageContainer__3knwg" };
styleInject(css$3);

var Buttons$1 = React.lazy(function () {
  return Promise.resolve().then(function () { return index; });
});
var Header$1 = React.lazy(function () {
  return Promise.resolve().then(function () { return index$1; });
});

var CarouselItem = function CarouselItem(_ref) {
  var carousel = _ref.carousel,
      displayType = _ref.displayType,
      setOverlay = _ref.setOverlay,
      message = _ref.message,
      btnDisabled = _ref.btnDisabled,
      handleMsgBtnClick = _ref.handleMsgBtnClick;

  var renderCarouselImage = function renderCarouselImage(carousel) {
    if (carousel.mediaType && carousel.mediaUrl && carousel.mediaType === 'image') {
      if (displayType === 'fixed') {
        return React__default.createElement('div', {
          className: styles$3.imageContainer,
          style: {
            backgroundImage: 'url(' + carousel.mediaUrl + ')'
          },
          onClick: function onClick() {
            return setOverlay({ visible: true, carousel: carousel });
          }
        });
      }
      if (displayType === 'actual') {
        return React__default.createElement('img', {
          src: carousel.mediaUrl,
          alt: '',
          className: 'ori-cursor-ptr ori-full-width',
          onClick: function onClick() {
            return setOverlay({ visible: true, carousel: carousel });
          }
        });
      }
      return React__default.createElement('img', {
        src: carousel.mediaUrl,
        alt: '',
        className: 'ori-cursor-ptr ori-full-width',
        style: { height: '200px' },
        onClick: function onClick() {
          return setOverlay({ visible: true, carousel: carousel });
        }
      });
    }
  };

  return React__default.createElement(
    'div',
    { className: styles$3.carouselItem },
    renderCarouselImage(carousel),
    carousel.mediaType && carousel.mediaUrl && carousel.mediaType === 'video' && React__default.createElement('iframe', {
      title: 'video-message',
      src: carousel.mediaUrl,
      width: '100%',
      frameBorder: '0',
      allow: 'autoplay; encrypted-media',
      allowFullScreen: true
    }),
    (carousel.title || carousel.subtitle) && React__default.createElement(
      React.Suspense,
      { fallback: null },
      React__default.createElement(Header$1, {
        className: 'ori-lr-mrgn-5',
        title: carousel.title,
        subtitle: carousel.subtitle
      })
    ),
    carousel.buttons && carousel.buttons.length > 0 && React__default.createElement(
      React.Suspense,
      { fallback: null },
      React__default.createElement(Buttons$1, {
        className: 'ori-pad-5',
        buttons: carousel.buttons,
        message: message,
        disabled: btnDisabled,
        onClick: handleMsgBtnClick
      })
    )
  );
};

CarouselItem.propTypes = {
  carousel: PropTypes.object,
  displayType: PropTypes.string,
  setOverlay: PropTypes.func,
  message: PropTypes.object,
  btnDisabled: PropTypes.bool,
  handleMsgBtnClick: PropTypes.func
};

var css$4 = ".Arrow-module_arrow__2ntu2 {\n  font-size: 12px !important;\n  color: #abaeb2 !important;\n  width: auto !important;\n  line-height: 1 !important; }\n  .Arrow-module_arrow__2ntu2::before {\n    content: \"\" !important; }\n  .Arrow-module_arrow__2ntu2:hover {\n    color: #3c4043 !important; }\n";
var styles$4 = { "arrow": "Arrow-module_arrow__2ntu2" };
styleInject(css$4);

var Arrow = function Arrow(_ref) {
  var text = _ref.text,
      className = _ref.className,
      style = _ref.style,
      align = _ref.align,
      onClick = _ref.onClick;
  return React__default.createElement(
    'span',
    {
      className: className + ' ' + styles$4.arrow + ' ori-font-default',
      style: _extends({}, style, align, {
        top: 'unset',
        bottom: '-30px',
        display: 'block'
      }),
      onClick: onClick
    },
    text
  );
};

Arrow.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  align: PropTypes.object,
  onClick: PropTypes.func
};

var Buttons$2 = React.lazy(function () {
  return Promise.resolve().then(function () { return index; });
});
var Header$2 = React.lazy(function () {
  return Promise.resolve().then(function () { return index$1; });
});

var CarouselBody = function CarouselBody(_ref) {
  var payload = _ref.payload,
      btnDisabled = _ref.btnDisabled,
      handleMsgBtnClick = _ref.handleMsgBtnClick,
      message = _ref.message,
      btnHidden = _ref.btnHidden,
      displayType = _ref.displayType,
      setOverlay = _ref.setOverlay;

  return React__default.createElement(
    'div',
    { className: styles$2.carouselBodyContainer },
    (payload.title || payload.subtitle) && React__default.createElement(
      React.Suspense,
      { fallback: null },
      React__default.createElement(Header$2, { title: payload.title, subtitle: payload.subtitle })
    ),
    payload && payload.options && payload.options.length > 0 && React__default.createElement(
      antd.Carousel,
      {
        className: styles$2.carousel,
        dots: {
          className: styles$2.slickDots
        },
        nextArrow: React__default.createElement(Arrow, { text: 'Next', align: { right: 0 } }),
        prevArrow: React__default.createElement(Arrow, { text: 'Prev', align: { left: 0 } }),
        arrows: true,
        autoplay: true,
        pauseOnHover: true
      },
      payload.options.map(function (carousel, index) {
        return React__default.createElement(CarouselItem, {
          key: index,
          carousel: carousel,
          displayType: displayType,
          setOverlay: setOverlay,
          message: message,
          btnDisabled: btnDisabled,
          handleMsgBtnClick: handleMsgBtnClick
        });
      })
    ),
    !btnHidden && payload.buttons && payload.buttons.length > 0 && React__default.createElement(
      React.Suspense,
      { fallback: null },
      React__default.createElement(Buttons$2, {
        buttons: payload.buttons,
        message: message,
        disabled: btnDisabled,
        onClick: handleMsgBtnClick
      })
    )
  );
};

CarouselBody.propTypes = {
  payload: PropTypes.object.isRequired,
  message: PropTypes.object.isRequired,
  handleMsgBtnClick: PropTypes.func,
  btnDisabled: PropTypes.bool,
  btnHidden: PropTypes.bool,
  displayType: PropTypes.string,
  setOverlay: PropTypes.func
};

CarouselBody.defaultProps = {
  btnDisabled: false,
  btnHidden: false
};

var Overlay = React.lazy(function () {
  return Promise.resolve().then(function () { return index$5; });
});

var CarouselWithButtons = function CarouselWithButtons(_ref) {
  var btnDisabled = _ref.btnDisabled,
      handleMsgBtnClick = _ref.handleMsgBtnClick,
      message = _ref.message,
      btnHidden = _ref.btnHidden,
      displayType = _ref.displayType,
      preferLang = _ref.preferLang;

  var _useState = React.useState({ visible: false, carousel: null }),
      _useState2 = slicedToArray(_useState, 2),
      overlay = _useState2[0],
      setOverlay = _useState2[1];

  var hideOverlay = function hideOverlay() {
    return setOverlay({ visible: false, carousel: null });
  };

  return React__default.createElement(
    React__default.Fragment,
    null,
    overlay.visible && overlay.carousel && React__default.createElement(
      React.Suspense,
      { fallback: null },
      React__default.createElement(
        Overlay,
        { onClose: hideOverlay },
        React__default.createElement('img', {
          src: overlay.carousel.mediaUrl,
          alt: '',
          style: {
            maxWidth: '100%',
            maxHeight: '70vh'
          }
        })
      )
    ),
    React__default.createElement(MessageWrapper, {
      message: message,
      preferLang: preferLang,
      component: CarouselBody,
      btnDisabled: btnDisabled,
      btnHidden: btnHidden,
      displayType: displayType,
      handleMsgBtnClick: handleMsgBtnClick,
      setOverlay: setOverlay
    })
  );
};

CarouselWithButtons.propTypes = {
  message: PropTypes.object.isRequired,
  handleMsgBtnClick: PropTypes.func,
  btnDisabled: PropTypes.bool,
  btnHidden: PropTypes.bool,
  displayType: PropTypes.string,
  preferLang: PropTypes.string
};

CarouselWithButtons.defaultProps = {
  btnDisabled: false,
  btnHidden: false
};

var Buttons$3 = React.lazy(function () {
  return Promise.resolve().then(function () { return index; });
});
var Header$3 = React.lazy(function () {
  return Promise.resolve().then(function () { return index$1; });
});

var RangePicker = antd.DatePicker.RangePicker;


var FormMessageBody = function FormMessageBody(_ref) {
  var payload = _ref.payload,
      message = _ref.message,
      handleMsgBtnClick = _ref.handleMsgBtnClick,
      btnHidden = _ref.btnHidden,
      btnDisabled = _ref.btnDisabled,
      defaultBtnDisplayCount = _ref.defaultBtnDisplayCount,
      disabled = _ref.disabled,
      showless = _ref.showless,
      showmore = _ref.showmore,
      onSubmit = _ref.onSubmit;

  var _useState = React.useState(payload.selectedValues || {}),
      _useState2 = slicedToArray(_useState, 2),
      selectedValues = _useState2[0],
      setSelectedValues = _useState2[1];

  var _useState3 = React.useState(payload.defaultDisabled),
      _useState4 = slicedToArray(_useState3, 2),
      defaultDisabled = _useState4[0],
      setDefaultDisabled = _useState4[1];

  var _useState5 = React.useState({}),
      _useState6 = slicedToArray(_useState5, 2),
      detectedErrors = _useState6[0],
      setDetectedErrors = _useState6[1];

  var deleteDetectedErrors = function deleteDetectedErrors(key) {
    if (detectedErrors[key]) {
      var errorKey = detectedErrors[key],
          restDetectedErrors = objectWithoutProperties(detectedErrors, [key]);

      setDetectedErrors(restDetectedErrors);
    }
  };

  var validateSelectedField = function validateSelectedField(item) {
    var hasError = false;
    if (item.type === 'input' && item.props.type === 'email') {
      if (!isEmail(selectedValues[item.props.name])) {
        hasError = true;
        setDetectedErrors(function (prevState) {
          return _extends({}, prevState, defineProperty({}, item.props.name, 'EmailId is not valid'));
        });
      }
    }
    return hasError;
  };

  var handleFormChange = function handleFormChange(changedValue, errorKey) {
    deleteDetectedErrors(errorKey);
    setSelectedValues(function (prevState) {
      return _extends({}, prevState, changedValue);
    });
    if (payload.autoSubmit) handleSubmit();
  };

  var handleSubmit = function handleSubmit() {
    var list = [];
    var hasError = Object.keys(detectedErrors).length > 0;
    payload.formData.forEach(function (item) {
      if (selectedValues[item.props.name] !== undefined) {
        var obj = { label: item.displayLabel };
        hasError = hasError || validateSelectedField(item);
        if (item.type === 'datePicker') {
          obj.value = selectedValues[item.props.name].format(item.props.format || 'DD-MMM-YYYY');
        } else if (item.type === 'dateRangePicker') {
          obj.value = selectedValues[item.props.name][0].format(item.props.format || 'DD-MMM-YYYY').concat(' : ', selectedValues[item.props.name][1].format(item.props.format || 'DD-MMM-YYYY'));
        } else if (item.type === 'radioGroup' || item.type === 'select') {
          var option = item.props.options.find(function (opt) {
            return opt.value === selectedValues[item.props.name];
          });
          obj.value = option.label;
        } else {
          obj.value = selectedValues[item.props.name];
        }
        list.push(obj);
      } else if (item.props.required && !detectedErrors[item.props.name]) {
        hasError = true;
        setDetectedErrors(function (prevState) {
          return _extends({}, prevState, defineProperty({}, item.props.name, 'This is required field'));
        });
      }
    });

    if (!hasError) {
      var data = {
        list: list,
        selectedData: selectedValues,
        relayData: payload.relayData
        // console.log('data', data, detectedErrors)
      };onSubmit(data);
    }
  };

  var handleEdit = function handleEdit() {
    return setDefaultDisabled(false);
  };

  return React__default.createElement(
    'div',
    { className: 'ori-word-break ori-mt-FormMessageContainer' },
    React__default.createElement(
      React.Suspense,
      { fallback: null },
      (payload.title || payload.subtitle) && React__default.createElement(Header$3, { title: payload.title, subtitle: payload.subtitle })
    ),
    payload.formData && payload.formData.length > 0 && React__default.createElement(
      React__default.Fragment,
      null,
      payload.formData.map(function (item, index) {
        switch (item.type) {
          case 'datePicker':
            return React__default.createElement(
              'div',
              { className: 'ori-b-pad-5', key: index },
              item.title && React__default.createElement(
                'p',
                null,
                item.props.required && React__default.createElement(
                  'span',
                  null,
                  '*'
                ),
                item.title
              ),
              React__default.createElement(antd.DatePicker, _extends({
                size: 'small',
                className: 'ori-full-width',
                style: { maxWidth: '150px' },
                disabledDate: function disabledDate(c) {
                  return c && item.disabledTimestamp && c.valueOf() < item.disabledTimestamp;
                }
              }, item.props, {
                disabled: disabled || defaultDisabled,
                value: selectedValues[item.props.name],
                onChange: function onChange(selectedDate) {
                  return handleFormChange(defineProperty({}, item.props.name, selectedDate || undefined), item.props.name);
                },
                inputReadOnly: true
              })),
              detectedErrors[item.props.name] && React__default.createElement(
                'p',
                { className: 'ori-font-xs ori-font-danger' },
                detectedErrors[item.props.name]
              )
            );
          case 'dateRangePicker':
            return React__default.createElement(
              'div',
              { className: 'ori-b-pad-5', key: index },
              item.title && React__default.createElement(
                'p',
                null,
                item.props.required && React__default.createElement(
                  'span',
                  null,
                  '*'
                ),
                item.title
              ),
              React__default.createElement(RangePicker, _extends({
                size: 'small',
                className: 'ori-full-width'
              }, item.props, {
                disabled: disabled || defaultDisabled,
                disabledDate: function disabledDate(c) {
                  if (item.disabledDateRange) {
                    if (item.disabledDateRange[0] && item.disabledDateRange[1]) {
                      return !(c && c < item.disabledDateRange[1] && c > item.disabledDateRange[0]);
                    }
                    if (item.disabledDateRange[0]) {
                      return c && c < item.disabledDateRange[0];
                    }
                    if (item.disabledDateRange[1]) {
                      return c && c > item.disabledDateRange[1];
                    }
                  }
                  return false;
                },
                value: selectedValues[item.props.name],
                onChange: function onChange(selectedDate) {
                  return handleFormChange(defineProperty({}, item.props.name, selectedDate || undefined), item.props.name);
                },
                inputReadOnly: true
              })),
              detectedErrors[item.props.name] && React__default.createElement(
                'p',
                { className: 'ori-font-xs ori-font-danger' },
                detectedErrors[item.props.name]
              )
            );
          case 'radioGroup':
            return React__default.createElement(
              'div',
              { className: 'ori-b-pad-5', key: index },
              item.title && React__default.createElement(
                'p',
                null,
                item.props.required && React__default.createElement(
                  'span',
                  null,
                  '*'
                ),
                item.title
              ),
              React__default.createElement(antd.Radio.Group, _extends({
                size: 'small',
                className: 'ori-full-width ' + (item.vertical ? 'ori-flex-column' : '')
              }, item.props, {
                disabled: disabled || defaultDisabled,
                value: selectedValues[item.props.name],
                onChange: function onChange(e) {
                  return handleFormChange(defineProperty({}, item.props.name, e.target.value), item.props.name);
                }
              })),
              detectedErrors[item.props.name] && React__default.createElement(
                'p',
                { className: 'ori-font-xs ori-font-danger' },
                detectedErrors[item.props.name]
              )
            );
          case 'select':
            return React__default.createElement(
              'div',
              { className: 'ori-b-pad-5', key: index },
              item.title && React__default.createElement(
                'p',
                null,
                item.props.required && React__default.createElement(
                  'span',
                  null,
                  '*'
                ),
                item.title
              ),
              React__default.createElement(antd.Select, _extends({
                size: 'small',
                className: 'ori-full-width'
              }, item.props, {
                getPopupContainer: function getPopupContainer(triggerNode) {
                  return triggerNode.parentNode;
                },
                disabled: disabled || defaultDisabled,
                value: selectedValues[item.props.name],
                onChange: function onChange(value) {
                  return handleFormChange(defineProperty({}, item.props.name, value), item.props.name);
                }
              })),
              detectedErrors[item.props.name] && React__default.createElement(
                'p',
                { className: 'ori-font-xs ori-font-danger' },
                detectedErrors[item.props.name]
              )
            );
          case 'input':
            return React__default.createElement(
              'div',
              { className: 'ori-b-pad-5', key: index },
              item.title && React__default.createElement(
                'p',
                null,
                item.props.required && React__default.createElement(
                  'span',
                  null,
                  '*'
                ),
                item.title
              ),
              React__default.createElement(antd.Input, _extends({
                size: 'small',
                className: 'ori-full-width'
              }, item.props, {
                disabled: disabled || defaultDisabled,
                value: selectedValues[item.props.name],
                onChange: function onChange(e) {
                  return handleFormChange(defineProperty({}, item.props.name, e.target.value), item.props.name);
                }
              })),
              detectedErrors[item.props.name] && React__default.createElement(
                'p',
                { className: 'ori-font-xs ori-font-danger' },
                detectedErrors[item.props.name]
              )
            );
          case 'rating':
            return React__default.createElement(
              'div',
              { className: 'ori-b-pad-5', key: index },
              item.title && React__default.createElement(
                'p',
                null,
                item.props.required && React__default.createElement(
                  'span',
                  null,
                  '*'
                ),
                item.title
              ),
              React__default.createElement(antd.Rate, _extends({}, item.props, {
                disabled: disabled || defaultDisabled,
                value: selectedValues[item.props.name],
                onChange: function onChange(value) {
                  return handleFormChange(defineProperty({}, item.props.name, value), item.props.name);
                }
              })),
              detectedErrors[item.props.name] && React__default.createElement(
                'p',
                { className: 'ori-font-xs ori-font-danger' },
                detectedErrors[item.props.name]
              )
            );
          default:
            return null;
        }
      }),
      !payload.autoSubmit && React__default.createElement(
        antd.Button,
        {
          size: 'small',
          className: 'ori-btn-submit',
          disabled: disabled,
          onClick: handleSubmit
        },
        payload.submitBtnText ? payload.submitBtnText : 'Submit'
      ),
      payload.defaultDisabled && React__default.createElement(
        antd.Button,
        {
          size: 'small',
          className: 'ori-btn-edit',
          disabled: disabled,
          onClick: handleEdit
        },
        payload.editBtnText ? payload.editBtnText : 'Edit'
      )
    ),
    React__default.createElement(
      React.Suspense,
      { fallback: null },
      !btnHidden && payload.buttons && payload.buttons.length > 0 && React__default.createElement(Buttons$3, {
        buttons: payload.buttons,
        message: message,
        disabled: btnDisabled || disabled,
        displayCount: payload.btnDisplayCount ? payload.btnDisplayCount : defaultBtnDisplayCount,
        showmore: showmore,
        showless: showless,
        onClick: handleMsgBtnClick
      })
    ),
    !btnHidden && payload.buttons && payload.buttons.length > 0 && React__default.createElement(Buttons$3, {
      buttons: payload.buttons,
      display_count: payload.btnDisplayCount ? payload.btnDisplayCount : defaultBtnDisplayCount,
      message: message,
      btn_disabled: btnDisabled,
      handleMsgBtnClick: handleMsgBtnClick,
      showmore: showmore,
      showless: showless
    })
  );
};
// }

FormMessageBody.propTypes = {
  payload: PropTypes.object.isRequired,
  message: PropTypes.object.isRequired,
  handleMsgBtnClick: PropTypes.func,
  btnDisabled: PropTypes.bool,
  disabled: PropTypes.bool,
  btnHidden: PropTypes.bool,
  defaultBtnDisplayCount: PropTypes.number,
  onSubmit: PropTypes.func,
  showmore: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  showless: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

FormMessageBody.defaultProps = {
  btnDisabled: false,
  btnHidden: false,
  disabled: false,
  defaultBtnDisplayCount: 4,
  showless: 'Show less',
  showmore: 'Show more'
};

var FormMessage = function FormMessage(props) {
  return React__default.createElement(MessageWrapper, _extends({ component: FormMessageBody }, props));
};

FormMessage.propTypes = {
  message: PropTypes.object.isRequired,
  handleMsgBtnClick: PropTypes.func,
  btn_disabled: PropTypes.bool,
  disabled: PropTypes.bool,
  btn_hidden: PropTypes.bool,
  default_btn_display_count: PropTypes.number,
  onSubmit: PropTypes.func,
  preferLang: PropTypes.string
};

FormMessage.defaultProps = {
  btn_disabled: false,
  btn_hidden: false,
  disabled: false,
  checkbox_disabled: false,
  default_btn_display_count: 4
};

var ImageItem$1 = React.lazy(function () {
  return Promise.resolve().then(function () { return index$2; });
});

var antIcon = React__default.createElement(icons.LoadingOutlined, { style: { fontSize: 24 }, spin: true });

var UploadedDocumentBody = function UploadedDocumentBody(_ref) {
  var payload = _ref.payload,
      message = _ref.message,
      handleDownload = _ref.handleDownload,
      handleRetry = _ref.handleRetry;

  var onClickDownload = function onClickDownload() {
    if (handleDownload) handleDownload(payload.fileUrl);
  };

  var onClickRetry = function onClickRetry() {
    if (handleRetry) handleRetry(message);
  };

  var renderFileIcon = function renderFileIcon(fileType) {
    if (!fileType) return null;
    if (fileType.indexOf('image/') !== -1) {
      return React__default.createElement(icons.FileImageOutlined, { className: 'ori-font-lg' });
    } else if (fileType === 'application/pdf') {
      return React__default.createElement(icons.FilePdfOutlined, { className: 'ori-font-lg' });
    } else {
      return React__default.createElement(icons.FileOutlined, { className: 'ori-font-lg' });
    }
  };

  var checkStatusAndRenderIcon = function checkStatusAndRenderIcon() {
    if (message.status === 'pending') return React__default.createElement(antd.Spin, { indicator: antIcon });else if (message.status === 'failed') {
      return React__default.createElement(icons.ReloadOutlined, { className: 'ori-font-lg', onClick: onClickRetry });
    } else {
      return React__default.createElement(icons.DownloadOutlined, { className: 'ori-font-lg', onClick: onClickDownload });
    }
  };

  return React__default.createElement(
    'div',
    null,
    payload.fileType.indexOf('image/') !== -1 && payload.fileUrl && !payload.isDownloadable && React__default.createElement(
      React.Suspense,
      { fallback: null },
      React__default.createElement(ImageItem$1, { src: payload.fileUrl })
    ),
    React__default.createElement(
      'div',
      { className: 'ori-flex ori-flex-ac ori-lr-pad-5' },
      renderFileIcon(payload.fileType),
      React__default.createElement(
        'div',
        { className: 'ori-full-flex ori-lr-pad-10' },
        React__default.createElement(
          'p',
          { className: 'ori-word-break-all' },
          payload.fileName
        ),
        React__default.createElement(
          'div',
          null,
          payload.pages && React__default.createElement(
            React.Fragment,
            null,
            React__default.createElement(
              'span',
              null,
              payload.pages,
              ' pages'
            ),
            React__default.createElement(
              'span',
              { className: 'ori-lr-mrgn-5' },
              '\u2022'
            )
          ),
          payload.fileType && React__default.createElement(
            'span',
            { className: 'ori-uppercase' },
            getFormattedFileType(payload.fileType)
          ),
          payload.fileSize && React__default.createElement(
            React.Fragment,
            null,
            React__default.createElement(
              'span',
              { className: 'ori-lr-mrgn-5' },
              '\u2022'
            ),
            React__default.createElement(
              'span',
              null,
              getFormattedSize(payload.fileSize)
            )
          )
        )
      ),
      (payload.fileType.indexOf('image/') === -1 || payload.isDownloadable) && checkStatusAndRenderIcon()
    )
  );
};

UploadedDocumentBody.propTypes = {
  payload: PropTypes.object.isRequired,
  message: PropTypes.object.isRequired,
  handleDownload: PropTypes.func,
  handleRetry: PropTypes.func
};

var UploadedDocument = function UploadedDocument(_ref) {
  var preferLang = _ref.preferLang,
      message = _ref.message,
      handleRetry = _ref.handleRetry,
      handleDownload = _ref.handleDownload;
  return React__default.createElement(MessageWrapper, {
    message: message,
    preferLang: preferLang,
    component: UploadedDocumentBody,
    handleRetry: handleRetry,
    handleDownload: handleDownload
  });
};

UploadedDocument.propTypes = {
  message: PropTypes.object.isRequired,
  handleRetry: PropTypes.func,
  handleDownload: PropTypes.func,
  preferLang: PropTypes.string
};

UploadedDocument.defaultProps = {};

var css$5 = ".Buttons-module_buttonsContainer__cMAKF {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap; }\n\n.Buttons-module_button__1SNzA {\n  padding: 0px 5px !important;\n  font-size: 12px !important;\n  margin: 5px;\n  white-space: normal !important; }\n";
var styles$5 = { "buttonsContainer": "Buttons-module_buttonsContainer__cMAKF", "button": "Buttons-module_button__1SNzA" };
styleInject(css$5);

var Buttons$4 = function Buttons(_ref) {
  var buttons = _ref.buttons,
      type = _ref.type,
      disabled = _ref.disabled,
      message = _ref.message,
      _onClick = _ref.onClick,
      className = _ref.className;
  return React__default.createElement(
    'div',
    { className: styles$5.buttonsContainer + ' ' + className },
    buttons.map(function (btn, index) {
      return React__default.createElement(
        antd.Button,
        {
          key: index,
          size: 'small',
          type: type,
          className: styles$5.button,
          disabled: disabled,
          onClick: function onClick() {
            return _onClick(btn, message);
          }
        },
        btn.text
      );
    })
  );
};

Buttons$4.propTypes = {
  type: PropTypes.string,
  buttons: PropTypes.array,
  message: PropTypes.object,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string
};

Buttons$4.defaultProps = {
  type: 'primary',
  disabled: false,
  className: ''
};

var index = /*#__PURE__*/Object.freeze({
  default: Buttons$4
});

var Header$4 = function Header(_ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle,
      className = _ref.className;

  return React__default.createElement(
    React__default.Fragment,
    null,
    title && React__default.createElement('div', {
      className: 'ori-font-bold ori-no-b-mrgn ori-font-sm ori-word-break-all ' + className,
      dangerouslySetInnerHTML: { __html: title }
    }),
    subtitle && React__default.createElement('div', {
      className: 'ori-font-13 ori-no-b-mrgn ori-word-break-all ' + className,
      dangerouslySetInnerHTML: { __html: subtitle }
    })
  );
};

Header$4.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  className: PropTypes.string
};

Header$4.defaultProps = {
  className: ''
};

var index$1 = /*#__PURE__*/Object.freeze({
  default: Header$4
});

var ImageItem$2 = React.memo(function (_ref) {
  var src = _ref.src;

  return React__default.createElement(
    React__default.Fragment,
    null,
    React__default.createElement(antd.Image, {
      src: src,
      alt: ''
    })
  );
});

ImageItem$2.propTypes = {
  src: PropTypes.string
};

ImageItem$2.defaultProps = {
  className: ''
};

var index$2 = /*#__PURE__*/Object.freeze({
  default: ImageItem$2
});

var css$6 = ".CheckboxGroup-module_checkboxContainer__MRRnx {\n  padding: 5px;\n  word-break: break-word;\n  width: 100%;\n  background-color: #efeff44d;\n  border: 1px solid #efeff4; }\n\n.CheckboxGroup-module_checkboxWrapper__wCK4Q {\n  display: block;\n  word-break: break-all; }\n\n.CheckboxGroup-module_label__2rCRV {\n  padding-left: 5px;\n  padding-right: 5px; }\n\n.CheckboxGroup-module_button__3Y9GJ {\n  width: 100%;\n  margin-top: 5px;\n  font-size: 12px !important; }\n";
var styles$6 = { "checkboxContainer": "CheckboxGroup-module_checkboxContainer__MRRnx", "checkboxWrapper": "CheckboxGroup-module_checkboxWrapper__wCK4Q", "label": "CheckboxGroup-module_label__2rCRV", "button": "CheckboxGroup-module_button__3Y9GJ" };
styleInject(css$6);

/* eslint-disable react/jsx-indent-props */

var CheckboxGroup$1 = function CheckboxGroup(_ref) {
  var options = _ref.options,
      disabled = _ref.disabled,
      onSubmit = _ref.onSubmit;

  var _useState = React.useState([]),
      _useState2 = slicedToArray(_useState, 2),
      checkedItems = _useState2[0],
      setCheckedItems = _useState2[1];

  var handleChange = function handleChange(event) {
    var value = event.target.value;
    var filterItems = checkedItems.filter(function (item) {
      return item !== value;
    });
    setCheckedItems(filterItems.length === checkedItems.length ? [].concat(toConsumableArray(checkedItems), [value]) : filterItems);
  };

  var handleSubmit = function handleSubmit() {
    onSubmit(checkedItems);
  };

  return React__default.createElement(
    'div',
    { className: styles$6.checkboxContainer },
    options.map(function (option, index) {
      return React__default.createElement(
        'span',
        { key: index, className: styles$6.checkboxWrapper },
        !disabled ? React__default.createElement('input', {
          type: 'checkbox',
          id: index,
          value: option.value,
          onChange: handleChange
        }) : React__default.createElement(
          'span',
          null,
          index + 1,
          '. '
        ),
        React__default.createElement(
          'span',
          { className: styles$6.label },
          option.label
        )
      );
    }),
    !disabled && React__default.createElement(
      antd.Button,
      {
        type: 'primary',
        size: 'small',
        className: styles$6.button,
        onClick: handleSubmit,
        danger: true
      },
      'Submit'
    )
  );
};

CheckboxGroup$1.propTypes = {
  options: PropTypes.array,
  disabled: PropTypes.bool,
  onSubmit: PropTypes.func
};

CheckboxGroup$1.defaultProps = {
  options: [],
  disabled: false
};

var index$3 = /*#__PURE__*/Object.freeze({
  default: CheckboxGroup$1
});

var css$7 = ".ListItem-module_container__20zS5 {\n  margin: 0;\n  padding-left: 20px; }\n";
var styles$7 = { "container": "ListItem-module_container__20zS5" };
styleInject(css$7);

var ListItem$1 = function ListItem(_ref) {
  var list = _ref.list;
  return React__default.createElement(
    'ul',
    { className: styles$7.container },
    list.map(function (item, index) {
      return React__default.createElement(
        'li',
        { key: index, className: styles$7.item },
        item.label
      );
    })
  );
};

ListItem$1.propTypes = {
  list: PropTypes.array.isRequired
};

var index$4 = /*#__PURE__*/Object.freeze({
  default: ListItem$1
});

var css$8 = ".Overlay-module_overlayContainer__2rwSw {\n  z-index: 9999999;\n  position: fixed;\n  flex: 1;\n  background-color: #00000033;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 15px; }\n\n.Overlay-module_overlayBody__1JKxg {\n  position: relative;\n  background-color: #ffffff;\n  border-radius: 3px;\n  overflow: hidden;\n  padding: 5px; }\n\n.Overlay-module_button__M3tgT {\n  position: absolute !important;\n  top: 10px;\n  right: 10px; }\n";
var styles$8 = { "overlayContainer": "Overlay-module_overlayContainer__2rwSw", "overlayBody": "Overlay-module_overlayBody__1JKxg", "button": "Overlay-module_button__M3tgT" };
styleInject(css$8);

var IconBase = function IconBase(_ref, _ref2) {
  var _ref2$reactIconBase = _ref2.reactIconBase,
      reactIconBase = _ref2$reactIconBase === undefined ? {} : _ref2$reactIconBase;
  var children = _ref.children,
      color = _ref.color,
      size = _ref.size,
      style = _ref.style,
      width = _ref.width,
      height = _ref.height,
      props = objectWithoutProperties(_ref, ['children', 'color', 'size', 'style', 'width', 'height']);

  var computedSize = size || reactIconBase.size || '1em';
  return React__default.createElement('svg', _extends({
    children: children,
    fill: 'currentColor',
    preserveAspectRatio: 'xMidYMid meet',
    height: height || computedSize,
    width: width || computedSize
  }, reactIconBase, props, {
    style: _extends({
      verticalAlign: 'middle',
      color: color || reactIconBase.color
    }, reactIconBase.style || {}, style)
  }));
};

IconBase.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  style: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};

IconBase.contextTypes = {
  reactIconBase: PropTypes.shape(IconBase.propTypes)
};

var CloseIcon = function CloseIcon(props) {
  return React__default.createElement(
    IconBase,
    _extends({ viewBox: '0 0 40 40' }, props),
    React__default.createElement(
      'g',
      null,
      React__default.createElement('path', {
        d: 'm31.6 10.7l-9.3 9.3 9.3 9.3-2.3 2.3-9.3-9.3-9.3 9.3-2.3-2.3 9.3-9.3-9.3-9.3 2.3-2.3 9.3 9.3 9.3-9.3z'
      })
    )
  );
};

var Overlay$1 = function Overlay(_ref) {
  var children = _ref.children,
      onClose = _ref.onClose;

  return React__default.createElement(
    'div',
    { className: styles$8.overlayContainer },
    React__default.createElement(
      'div',
      { className: styles$8.overlayBody },
      children,
      React__default.createElement(
        antd.Button,
        {
          className: styles$8.button,
          size: 'small',
          shape: 'circle',
          onClick: onClose
        },
        React__default.createElement(CloseIcon, { size: 16 })
      )
    )
  );
};

Overlay$1.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  onClose: PropTypes.func
};

var index$5 = /*#__PURE__*/Object.freeze({
  default: Overlay$1
});

exports.TextMessage = TextMessage;
exports.TextWithMedia = TextWithMedia;
exports.CarouselWithButtons = CarouselWithButtons;
exports.FormMessage = FormMessage;
exports.UploadedDocument = UploadedDocument;
//# sourceMappingURL=index.js.map
