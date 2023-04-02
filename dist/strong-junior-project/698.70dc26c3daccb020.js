"use strict";
(self.webpackChunkstrong_junior_project =
  self.webpackChunkstrong_junior_project || []).push([
  [698],
  {
    3698: ($, h, o) => {
      o.r(h), o.d(h, { HomeModule: () => m });
      var g = o(6895),
        d = o(6582),
        r = o(5439),
        p = o(2722),
        f = o(8746),
        Y = o(6311),
        v = o(7794),
        t = o(4650),
        y = o(4729),
        M = o(7009),
        x = o(4859),
        C = o(605),
        L = o(4845),
        u = o(4333);
      function H(s, e) {
        1 & s && t._UZ(0, "app-loader");
      }
      function O(s, e) {
        1 & s && t._UZ(0, "app-game", 8),
          2 & s && t.Q6J("gameInfo", e.$implicit);
      }
      const D = function (s, e) {
        return { itemsPerPage: 25, currentPage: s, totalItems: e };
      };
      function T(s, e) {
        if (1 & s) {
          const n = t.EpF();
          t.TgZ(0, "section")(1, "h2"),
            t._uU(2, "Last released games"),
            t.qZA(),
            t.TgZ(3, "div", 1)(4, "button", 2),
            t.NdJ("click", function () {
              t.CHM(n);
              const i = t.oxw();
              return t.KtG(i.lastGames());
            }),
            t._uU(5, "Last released games"),
            t.qZA(),
            t.TgZ(6, "button", 2),
            t.NdJ("click", function () {
              t.CHM(n);
              const i = t.oxw();
              return t.KtG(i.lastWeekGames());
            }),
            t._uU(7, "Last week released games"),
            t.qZA(),
            t.TgZ(8, "button", 2),
            t.NdJ("click", function () {
              t.CHM(n);
              const i = t.oxw();
              return t.KtG(i.goToAllGames());
            }),
            t._uU(9, "See all Games"),
            t.qZA()(),
            t.TgZ(10, "div", 3),
            t.YNc(11, O, 1, 1, "app-game", 4),
            t.ALo(12, "paginate"),
            t.qZA(),
            t.TgZ(13, "div", 5)(14, "div", 6)(15, "pagination-controls", 7),
            t.NdJ("pageChange", function (i) {
              t.CHM(n);
              const J = t.oxw();
              return t.KtG(J.navigateTo(i));
            }),
            t.qZA()()()();
        }
        if (2 & s) {
          const n = t.oxw();
          t.xp6(11),
            t.Q6J(
              "ngForOf",
              t.xi3(12, 1, n.games, t.WLB(4, D, n.page, n.total))
            );
        }
      }
      class l extends v.F {
        constructor(e, n, a) {
          super(),
            (this.gamesService = e),
            (this.router = n),
            (this.snackBar = a),
            (this.dates = "");
        }
        ngOnInit() {
          this.getNewGames(1);
        }
        getNewGames(e) {
          this.isLoading = !0;
          const n = r().startOf("year").format("YYYY-MM-DD"),
            a = r().add(1, "year").endOf("year").format("YYYY-MM-DD");
          (this.dates = `${n},${a}`),
            this.gamesService
              .getLastReleasedGames(e, this.dates)
              .pipe(
                (0, p.R)(this.destroy$),
                (0, f.x)(() => {
                  this.isLoading = !1;
                })
              )
              .subscribe((i) => {
                (this.total = i.count),
                  (this.games = i.results),
                  (this.isLoading = !1);
              });
        }
        navigateTo(e) {
          (this.page = e), this.getNewGames(e);
        }
        lastWeekGames() {
          this.isLoading = !0;
          const e = r().startOf("week").format("YYYY-MM-DD"),
            n = r().add(-7, "week").endOf("year").format("YYYY-MM-DD");
          (this.dates = `${n},${e}`),
            this.gamesService
              .getLastReleasedGames(1, this.dates)
              .pipe(
                (0, p.R)(this.destroy$),
                (0, f.x)(() => {
                  this.isLoading = !1;
                })
              )
              .subscribe((a) => {
                (this.total = a.count),
                  (this.games = a.results),
                  (this.isLoading = !1);
              });
        }
        lastGames() {
          this.isLoading = !0;
          const e = r().startOf("year").format("YYYY-MM-DD"),
            n = r().add(1, "year").endOf("year").format("YYYY-MM-DD");
          (this.dates = `${e},${n}`),
            this.gamesService
              .getLastReleasedGames(1, this.dates)
              .pipe(
                (0, p.R)(this.destroy$),
                (0, f.x)(() => {
                  this.isLoading = !1;
                })
              )
              .subscribe(
                (a) => {
                  (this.total = a.count),
                    (this.games = a.results),
                    (this.isLoading = !1);
                },
                (a) => {
                  (this.isLoading = !1),
                    this.snackBar.openFromComponent(Y.h, {
                      data: a.messageerror,
                      verticalPosition: "top",
                      horizontalPosition: "end",
                      duration: 3e3,
                    });
                }
              );
        }
        goToAllGames() {
          this.router.navigateByUrl("/games");
        }
      }
      (l.ɵfac = function (e) {
        return new (e || l)(t.Y36(y.B), t.Y36(d.F0), t.Y36(M.ux));
      }),
        (l.ɵcmp = t.Xpm({
          type: l,
          selectors: [["app-home"]],
          features: [t.qOj],
          decls: 2,
          vars: 2,
          consts: [
            [4, "ngIf"],
            [1, "filter-buttons"],
            ["mat-raised-button", "", "color", "primary", 3, "click"],
            [1, "home-content"],
            [3, "gameInfo", 4, "ngFor", "ngForOf"],
            [1, "pagination"],
            [1, "pagination-controllers"],
            [1, "pagination", 3, "pageChange"],
            [3, "gameInfo"],
          ],
          template: function (e, n) {
            1 & e &&
              (t.YNc(0, H, 1, 0, "app-loader", 0),
              t.YNc(1, T, 16, 7, "section", 0)),
              2 & e &&
                (t.Q6J("ngIf", n.isLoading), t.xp6(1), t.Q6J("ngIf", n.games));
          },
          dependencies: [g.sg, g.O5, x.lW, C.R, L.$, u.LS, u._s],
          styles: [
            "h2[_ngcontent-%COMP%]{color:beige}.home-content[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;flex-wrap:wrap;gap:40px}.filter-buttons[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin-bottom:60px}.filter-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:0 5px}.pagination[_ngcontent-%COMP%]{margin-top:30px;display:flex;justify-content:center;align-items:center}",
          ],
        }));
      const G = [{ path: "", component: l }];
      class c {}
      (c.ɵfac = function (e) {
        return new (e || c)();
      }),
        (c.ɵmod = t.oAB({ type: c })),
        (c.ɵinj = t.cJS({ imports: [d.Bz.forChild(G), d.Bz] }));
      var Z = o(4466),
        A = o(7430);
      class m {}
      (m.ɵfac = function (e) {
        return new (e || m)();
      }),
        (m.ɵmod = t.oAB({ type: m })),
        (m.ɵinj = t.cJS({ imports: [g.ez, c, A.M, Z.m, u.JX] }));
    },
  },
]);
