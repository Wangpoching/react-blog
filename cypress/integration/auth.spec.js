describe("Auth", () => {
  it("test no article", () => {
    cy.visit("http://localhost:3000/react-blog/home")
    cy.intercept('GET', /\/articles\?page=[0-9]&limit=[0-9]$/, {
      statusCode: 200,
      body: JSON.stringify({
        success: "true",
        data: [],
      }),
      headers: {
        'article-amount': '0'
      }
    })
    cy.contains('所有文章').click()
    cy.url().should('includes', 'http://localhost:3000/react-blog/articles')
    cy.contains('還沒有任何文章')
  })
  it("test has article", () => {
    cy.visit("http://localhost:3000/react-blog/home")
    cy.intercept('GET', 'https://react-blog.bocyun.tw/v1' + '/articles?page=1&limit=5', {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        data: [{
          id: 42,
          name: '王博群',
          authorUid: '1LeBcIh5GbYdzrKiUwq4YwtY0UJ2',
          title: '史詩翻盤！Nadal讓二追三　奪破紀錄第21座大滿貫',
          content: '{\"blocks\":[{\"key\":\"c533c\",\"text\":\"2022年澳洲網球公開賽今(30)日進行最後一天的賽事，俄羅斯新「沙皇」Daniil Medvedev面對「蠻牛」Rafael Nadal，雙方在激戰了5局之後，Nadal上演「輸二贏三」的大逆轉，以2:6、6:7(5)、6:4、6:4、7:5贏球，拿男單史無前例的第21座大滿貫。\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"24ggp\",\"text\":\"\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"71trl\",\"text\":\"Medvedev在去年在澳網殺進到決賽，但不敵世界球王Novak Djokovic，不過年底在美網成功登頂，拿下個人生涯第一座大滿貫冠軍，對於士氣和心理素質上都有所提升。\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"evln7\",\"text\":\"\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"992fb\",\"text\":\"而Nadal則是在去年陷入傷病潮，自家後花園的法網也沒能守住，目前他和Roger Federer及Novak Djokovic都拿下了20座大滿貫，只要贏下這場就能獨居史上第一。\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"8ecnj\",\"text\":\"\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"mb2u\",\"text\":\"此役Medvedev開賽氣勢如虹，首盤在1:1之後開始掌握局勢，連續破掉Nadal的發球局，以6:2先聲奪人；次盤Nadal一度以4:1領先，但Medvedev展現強大心理素質，逼進延長賽後，反倒以7:5再下一城，手握兩盤的絕對優勢。\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"1sgt3\",\"text\":\"\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"964ru\",\"text\":\"不過在關鍵第三盤，比賽出現戲劇性的轉折，Nadal在第5局一度被逼出3個破發點的情況下，硬是守了下來，反而在第8局破掉Medvedev的發球局，結果以6:4追回一盤，雙方士氣也微妙的發生逆轉。\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"defea\",\"text\":\"\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"1nj25\",\"text\":\"第4盤Medvedev第一個發球局就被破，雖然他在第4局破了回來，但隨後又在第5局再度遭到破發，體能調節上似乎出現了一些瓶頸，接著以4:6又輸一盤，也讓Nadal將比賽拚進第5盤。\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"2v6s3\",\"text\":\"\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"15pjp\",\"text\":\"決勝盤氣勢雙方士氣上此消彼漲，前4局各自保發後，Nadal第5局率先破發，並成功化解對方的破發點、守下第6局；不料在自己的賽末發球局，蠻牛卻在30:0時被０Medvedev在逆境之下連贏4球，將局數逼成了5:5。\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"6v8li\",\"text\":\"\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"e4jfr\",\"text\":\"但第11局Medvedev自己的發球局又遇到麻煩，激戰到40:40之後，還是失守。而這一Nadal沒有再讓機會飛走，穩穩地拿下自己的下一個發球局，奪得生涯第2座澳網冠軍，也是個人第21座大滿貫。\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"rmh0\",\"text\":\"\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"doj87\",\"text\":\"目前網壇由「三巨頭」各以20座大滿貫並列史上最多，不過現任球王Novak Djokovic因拒打疫苗遭澳洲政府遣返，Roger Federer因傷缺席，僅有Nadal參加澳網，他也成功的把握住了這個機會，以一個讓人難以置信的逆轉，拿到生涯第21座大滿貫。\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"bjgjh\",\"text\":\"\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"fo9sg\",\"text\":\"本文摘自 NOWnews 今日新聞\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[{\"offset\":5,\"length\":12,\"key\":0}],\"data\":{}},{\"key\":\"8n4fb\",\"text\":\"\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{\"0\":{\"type\":\"LINK\",\"mutability\":\"MUTABLE\",\"data\":{\"href\":\"https://www.nownews.com/\",\"url\":\"https://www.nownews.com/\"}}}}',
          plainContent: '2022年澳洲網球公開賽今(30)日進行最後一天的賽事，俄羅斯新「沙皇」Daniil Medvedev面對「蠻牛」Rafael Nadal，雙方在激戰了5局之後，Nadal上演「輸二贏三」的大逆轉，以2:6、6:7(5)、6:4、6:4、7:5贏球，拿男單史無前例的第21座大滿貫。\u0001\u0001Medvedev在去年在澳網殺進到決賽，但不敵世界球王Novak Djokovic，不過年底在美網成功登頂，拿下個人生涯第一座大滿貫冠軍，對於士氣和心理素質上都有所提升。\u0001\u0001而Nadal則是在去年陷入傷病潮，自家後花園的法網也沒能守住，目前他和Roger Federer及Novak Djokovic都拿下了20座大滿貫，只要贏下這場就能獨居史上第一。\u0001\u0001此役Medvedev開賽氣勢如虹，首盤在1:1之後開始掌握局勢，連續破掉Nadal的發球局，以6:2先聲奪人；次盤Nadal一度以4:1領先，但Medvedev展現強大心理素質，逼進延長賽後，反倒以7:5再下一城，手握兩盤的絕對優勢。\u0001\u0001不過在關鍵第三盤，比賽出現戲劇性的轉折，Nadal在第5局一度被逼出3個破發點的情況下，硬是守了下來，反而在第8局破掉Medvedev的發球局，結果以6:4追回一盤，雙方士氣也微妙的發生逆轉。\u0001\u0001第4盤Medvedev第一個發球局就被破，雖然他在第4局破了回來，但隨後又在第5局再度遭到破發，體能調節上似乎出現了一些瓶頸，接著以4:6又輸一盤，也讓Nadal將比賽拚進第5盤。\u0001\u0001決勝盤氣勢雙方士氣上此消彼漲，前4局各自保發後，Nadal第5局率先破發，並成功化解對方的破發點、守下第6局；不料在自己的賽末發球局，蠻牛卻在30:0時被０Medvedev在逆境之下連贏4球，將局數逼成了5:5。\u0001\u0001但第11局Medvedev自己的發球局又遇到麻煩，激戰到40:40之後，還是失守。而這一Nadal沒有再讓機會飛走，穩穩地拿下自己的下一個發球局，奪得生涯第2座澳網冠軍，也是個人第21座大滿貫。\u0001\u0001目前網壇由「三巨頭」各以20座大滿貫並列史上最多，不過現任球王Novak Djokovic因拒打疫苗遭澳洲政府遣返，Roger Federer因傷缺席，僅有Nadal參加澳網，他也成功的把握住了這個機會，以一個讓人難以置信的逆轉，拿到生涯第21座大滿貫。\u0001\u0001本文摘自 NOWnews 今日新聞\u0001',
          createdAt: '2022-01-30T16:12:36.000Z'
        }]
      }),
      headers: {
        'article-amount': '10'
      }
    })
    cy.contains('所有文章').click()
    cy.url().should('includes', 'http://localhost:3000/react-blog/articles')
    cy.contains('王博群')
  })
  it("test error", () => {
    cy.visit("http://localhost:3000/react-blog/home")
    cy.intercept('GET', 'https://react-blog.bocyun.tw/v1' + '/articles?page=1&limit=5', {
      statusCode: 400
    })
    cy.contains('所有文章').click()
    cy.url().should('includes', 'http://localhost:3000/react-blog/home')
  })
})