# The Data Science Experience Blog

![blog landing page](assets/post_cont_image/blog_screenshot.png)

**The Data Science Experience** is a blog designed to guide newcomers through the essentials of data science and machine learning. I cover key technical topics like coding, data analysis, math, probability and statistics, as well as tips on job hunting, networking, and professional development—everything beginners need to get started and thrive in the industry. This blog also serves as a way for me to internalize the knowledge I’m gaining, and it will evolve as I progress in my own data science career, offering insights that grow with us.

## Getting Started

To contribute to this blog or create your own, you'll need to install some essential tools on your machine.

## System Requirements

To run this blog locally, you will need to install [Jekyll](https://jekyllrb.com). Please refer to the installation instructions on the official Jekyll website [here](https://jekyllrb.com/docs/installation/).

If you're unsure whether Jekyll is installed correctly, you can verify the installation by running this command

```bash
    jekyll -v
```

If Jekyll is installed successfully, you should see a confirmation message displaying the version number

```bash
    jekyll X.X.X
```

If instead you encounter this error

```bash
bad interpreter: No such file or directory
```

 it indicates that Jekyll isn't installed, likely due to missing dependencies. To resolve this, please refer to the [troubleshooting guide](https://jekyllrb.com/docs/troubleshooting/#installation-problems) to fix the issue.

*Note: The gem wdm 0.1.0 should be commented out in the Gemfile for the blog to run locally (applies to Windows users).

## Execution

After ensuring Jekyll is installed, clone or download this repository. Then, navigate to the root directory using the command line and enter the following command for the initial setup:

```bash
    bundle exec jekyll serve
```

To run Jekyll after the first setup, simply use this command:

```bash
    jekyll serve
```

You can then access the blog at **127.0.0.1:4000** (or **http://localhost:4000**).

## Customization

If you wish to customize this blog, you can clone this repository and refer to the documentation on the official theme's GitHub page [here](https://github.com/mmistakes/jekyll-theme-basically-basic).

## Deployment Instructions

To host your Jekyll blog on GitHub Pages, you can follow this [tutorial.](https://www.youtube.com/watch?v=fqFjuX4VZmU)

## Technology Stack

* [Jekyll](https://jekyllrb.com) static site generator.
* [Basically Basic](https://github.com/mmistakes/jekyll-theme-basically-basic) jekyll theme.
* [Disqus](https://disqus.com) for comments.
* [Google Analytics](https://analytics.google.com/analytics/web) for site analytics.
* [Algolia](https://www.algolia.com) for search functionality.
* [Jekyll feed](https://github.com/jekyll/jekyll-feed) for generating the Atom RSS feed.
* [Jekyll seo](https://github.com/jekyll/jekyll-seo-tag) for search engine optimization.
* [mailchimp](https://mailchimp.com) for managing newsletter subscriptions.

## Contributors

* [Matt Delaune](https://github.com/mattdelaune)- Author and designer of the blog.

* [mmistakes](https://github.com/mmistakes) - The initial jekyll theme creator.

And special thanks to [Semasuka](https://github.com/semasuka) for the inspiration and detailed help in constructing the blog. Please check out his [blog](https://semasuka.github.io/blog/) and incredible project walkthroughs!
