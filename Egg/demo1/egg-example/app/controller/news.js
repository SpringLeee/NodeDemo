module.exports = app => {
    class NewsController extends app.Controller {
        * list() {
            const dataList = {
                list: [
                    { id: 1, title: 'this is news 1', url: '/news/1' },
                    { id: 2, title: 'this is news 2', url: '/news/2' }
                ]
            };
            yield this.ctx.render('news/list.tpl', dataList);
        }
    }
    return NewsController;
};


module.exports = app => {
    app.get('/', app.controller.home.index);
    app.get('/news', app.controller.news.list);
};