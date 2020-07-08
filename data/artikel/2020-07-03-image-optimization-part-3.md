---
image: "https://res.cloudinary.com/softwaremakassar/image/upload/c_scale,w_980/v1593997825/munirapp.github.io/artikel/2020-07-03-image-optimization-part-3.webp"
title: "Image Optimization dalam Website Part 3"
date: "2020-07-03"
desc: "Bagian ini adalah bagian ketiga dari seri artikel Image Optimization dalam Website. Saya membagi seri artikel Image Optimization menjadi 4 bagian yaitu Optimasi Image Loader, Image Format, Image Delivery dan Image Security."
author: "Munir AP"
slug: "image-optimization-part-3"
---

Bagian ini adalah bagian ketiga dari seri artikel Image Optimization dalam Website. Saya membagi seri artikel Image Optimization menjadi 4 bagian yaitu Optimasi Image Loader, Image Format, Image Delivery dan Image Security.

```javascript
// JAVASCRIPT STYLE

import React, { Component } from "react";
import Context from "../config/Context";

class ContextProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filters: {
        active: true,
        headerActive: false,
      },
    };
  }

  render() {
    const { value } = this.props;
    return (
      <Context.Provider value={value}>{this.props.children}</Context.Provider>
    );
  }
}

export default ContextProvider;
```

```php
// PHP STYLE

<?php
    $defaultTimeZone='UTC';
    if(date_default_timezone_get()!=$defaultTimeZone)) date_default_timezone_set($defaultTimeZone);

    // somewhere in the code
    function _date($format="r", $timestamp=false, $timezone=false)
    {
    $userTimezone = new DateTimeZone(!empty($timezone) ? $timezone : 'GMT');
    $gmtTimezone = new DateTimeZone('GMT');
    $myDateTime = new DateTime(($timestamp!=false?date("r",(int)$timestamp):date("r")), $gmtTimezone);
    $offset = $userTimezone->getOffset($myDateTime);
    return date($format, ($timestamp!=false?(int)$timestamp:$myDateTime->format('U')) + $offset);
    }

    /* Example */
    echo 'System Date/Time: '.date("Y-m-d | h:i:sa").'<br>';
    echo 'New York Date/Time: '._date("Y-m-d | h:i:sa", false, 'America/New_York').'<br>';
    echo 'Belgrade Date/Time: '._date("Y-m-d | h:i:sa", false, 'Europe/Belgrade').'<br>';
    echo 'Belgrade Date/Time: '._date("Y-m-d | h:i:sa", 514640700, 'Europe/Belgrade').'<br>';
?>
```

# Heading

## Heading 2

### Heading 3

- List Item 1
- List Item 2
- List Item 3

`blockquote style`

Line

---

- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media
