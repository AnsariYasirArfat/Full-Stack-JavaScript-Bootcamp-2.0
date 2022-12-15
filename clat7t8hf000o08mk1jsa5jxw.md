# Introduction to Web & HTML

# Web

The World Wide Web or Web was invented by English computer scientist [**Tim Berners-Lee**](https://en.wikipedia.org/wiki/Tim_Berners-Lee). It basically represents all the public websites or pages that users can access on their local devices through the internet. These pages and documents are interconnected by means of hyperlinks that can be accessed by programs such as web browsers.

![pexels-pixabay-40185.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1669100053327/3-DZAXBLS.jpg align="right")

## How does a webpage get rendered?

Suppose you want to search for some information on the internet. You go to your computer's web browser and enter the URL(Uniform Resource Locator) or text you want to look for. You get the information you have looked for. **But ever wonder how this happens?** **Here is a sequence of how the web page is rendered on our systems.**

*   While loading a web page, a web server sends a folder of files to a user’s web browser.
    
*   The browser engine converts this data into a tree-like structure known as a Render Tree. The Render Tree contains the style and content information browsers need to populate a webpage for viewers to see.
    
*   Using the Render Tree, the browser engine calculates the position of each visible element of a web page.
    
*   Finally, the browser engine populates the elements on the screen for the end-users view. The web page has now been rendered.
    

![How the website works111.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1669124352767/iul1etRMx.jpg align="left")

# Servers

In simple terms whenever computers share resources with client machines they are considered servers. A perfect example of a server is Apache.

\*\* Apache\*\* is the web server that processes requests and serves web assets and content via HTTP. HTTP Server is a free and open-source web server that delivers web content through the internet

### How do Servers Work?

let’s understand by a simple example. Say you want to open the YouTube website, then you type the address [www.youtube.com](https://www.youtube.com/) in the address bar of the browser. The browser will ask for information about the [YouTube](https://www.youtube.com/)  website on the web server. Then, the web server will look for the website's IP addresses first on the DNS server. After knowing the IP address of the website then the server can send information to the browser to be displayed.

Apart from being a storage center, the server also has several other functions according to its type. Here are some of the most common types of servers below.

### Types of Server.

**1\. Database servers** They allow other computers to access or upload data from and into it.

**2\. File servers** They provide users with access to files and data stored centrally.

**3\. Web servers** They deliver requested web pages to multiple client web browsers.

**4\. Mail servers** They are a sort of “virtual post office” that stores and sorts emails before they are sent to users upon request.

# What is HTML?

HTML is an acronym that stands for **Hyper Text Markup Language** which is used for creating web pages and web applications.

**Let's see what Hypertext Markup Language stands for.**

**Hyper Text:** HyperText simply means "Text within Text." HyperText is a way to link two or more web pages (HTML documents) with each other.

**Markup language:** Markup language makes the text more interactive and dynamic. It can turn text into images, tables, links, etc.

## HTML Tags

HTML tags are keywords helping web browsers to distinguish between HTML content and simple content before displaying the content on the screen of the devices. HTML tags contain three main parts: an opening tag, a content, and a closing tag. But some HTML tags are unclosed tags.

Let's go through Some basic types of HTML Tags.

### Heading Tags:

```css
<h1> This is Heading 1 </h1>
<h2> This is Heading 2 </h2>
```

An HTML heading tag can be defined as a title or a subtitle that you want to display on the webpage. There are six different HTML headings which are defined with the `<h1> to <h6>` tags (As the number of tag decrease the size of the heading decrease), from the main heading h1 to the least important heading h6.

### HTML paragraph:

The HTML paragraph tag is used to define a paragraph in a webpage.

```css
<p> This is HTML paragraph tag </p> ```



### HTML IMG tag:
***If you wondering how images are attached to web pages like this webpage, Let me introduce you to the img tag.***

This tag is used to display images on the web page. The HTML img tag is an empty tag that contains attributes only, closing tags are not used in the HTML image elements.

**Attributes of HTML Img tag**

- **src**:
 It describes the source or path of the image. It instructs the browser where to look for the image on the server.

- **alt**:
 The alt attribute defines an alternate text for the image if the image fails to be displayed. 

- **width**:
 It is an optional attribute that is used to specify the width to display the image. 

- **height**:
 It's used to define the height of the image.
```

![this is image](image.jpg align="left")

\`\`\`

***Thank you for reading.***