const { format } = require('date-fns');

class UrlView {
  render(url) {
    return {
      id: url.id,
      title: url.title,
      short_url: `http://localhost:3001/${url.slug}`,
      clicks: url.count_click,
      created_at: format(url.created_at, 'dd-MM-yyyy'),
      start_expires_date: format(url.start_expires_date, 'dd-MM-yyyy'),
      end_expires_date: format(url.end_expires_date, 'dd-MM-yyyy'),
    };
  }

  renderMany(urls) {
    return urls.map((url) => this.render(url));
  }
}

module.exports = new UrlView();
