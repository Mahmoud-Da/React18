const Scrollspy = () => {
  return (
    <>
      <nav id="navbar-example2" className="navbar bg-body-tertiary px-3 mb-3">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a className="nav-link" href="#scrollspyHeading1">
              First
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#scrollspyHeading2">
              Second
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#scrollspyHeading3">
                  Third
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#scrollspyHeading4">
                  Fourth
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />{" "}
              </li>
              <li>
                <a className="dropdown-item" href="#scrollspyHeading5">
                  Fifth
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <div
        data-bs-spy="scroll"
        data-bs-target="#navbar-example2"
        data-bs-root-margin="0px 0px -40%"
        data-bs-smooth-scroll="true"
        className="scrollspy-example bg-body-tertiary p-3 rounded-2"
        tabIndex="0"
      >
        <h4 id="scrollspyHeading1">First heading</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, culpa
          earum debitis consectetur natus quidem ab. Consectetur aliquam, fugiat
          laudantium doloribus dicta cupiditate ipsum at deleniti nam cum
          eligendi perferendis sed amet. Facilis fugiat suscipit, ipsam, cum
          autem debitis inventore tempore earum iste odit dicta? Debitis, odit
          cumque placeat quae quos similique aspernatur fuga blanditiis labore,
          tenetur, iure voluptatibus atque dolorum. Veniam molestias neque
          minima maxime assumenda consectetur unde sint exercitationem. Hic
          suscipit sit commodi asperiores dolorum nisi et, quaerat a nulla
          beatae accusantium laborum, quae impedit inventore ipsum ad debitis
          aperiam error aliquam deleniti ullam quo fuga perferendis? Minima
          assumenda harum, dicta eligendi deleniti delectus sapiente atque illum
          fugit. At quam earum, tempora praesentium nam alias inventore, sequi
          sapiente sint dolore necessitatibus nisi rerum nostrum dolorum impedit
          placeat officiis, suscipit beatae! Et hic consequuntur natus ab
          officia reiciendis numquam facere sapiente dolorum. Eos incidunt in
          sint! Iure doloribus ex ipsam, est exercitationem natus numquam
          perferendis soluta debitis ratione possimus aliquam magni alias ipsum
          voluptates. Nam consequuntur eum nobis earum! Id aut mollitia illum
          porro quibusdam sapiente ex adipisci aliquam cumque nostrum
          perferendis accusamus voluptas tempora odit dolor quasi aliquid
          reiciendis, error commodi quia repudiandae officiis a? Veniam ab enim
          non debitis ipsum mollitia nostrum quibusdam quod! Adipisci
          reprehenderit quia doloremque nostrum sapiente porro, minus distinctio
          illum modi culpa a! Debitis aperiam corrupti modi? Ab eveniet eaque
          fugiat ducimus architecto, error dolor illo officia magni aut
          asperiores aspernatur accusantium omnis mollitia molestias deserunt
          nobis ad pariatur corrupti! Ut nostrum ipsam reiciendis veniam quasi?
          Ex cumque in, illo voluptatibus, eligendi quidem porro repellendus
          minus soluta quo illum nulla ut exercitationem ipsum aliquid
          laudantium! Quibusdam debitis aliquid vitae temporibus nesciunt
          veniam, ab consectetur sapiente quos libero nostrum reprehenderit
          suscipit nisi inventore sit facilis in esse pariatur deserunt sed ad
          dignissimos, cupiditate, exercitationem illum. Consectetur magnam
          temporibus quasi beatae, vitae iste harum aliquam voluptates modi et
          labore cum maiores velit vel odit assumenda nam quam perferendis fugit
          similique unde! Accusamus quod officia illo totam tenetur odio, itaque
          exercitationem voluptas dolores et voluptate aliquam mollitia
          quibusdam maxime quos eveniet maiores soluta molestiae consequuntur!
          Aliquid ullam asperiores assumenda ut sit! Rerum ut repudiandae
          quisquam nostrum assumenda iure veritatis voluptate dolores, accusamus
          eligendi mollitia impedit cumque quo dolorum nisi ratione nesciunt,
          tempore at? Esse voluptatem, laboriosam commodi earum nostrum et a
          nam. Cum commodi accusamus id aliquam animi reprehenderit aperiam
          magni ut laborum minima? Perspiciatis veniam corporis atque dicta,
          voluptatibus ipsam molestiae ab. Est tempore repudiandae cupiditate
          voluptatem similique accusantium, non sunt impedit fugit assumenda
          vitae neque, ducimus fuga quasi nisi nesciunt suscipit eveniet debitis
          cumque accusamus dolorem nostrum eaque. Doloribus optio quibusdam
          corporis accusantium obcaecati molestiae consequatur odit deserunt at
          exercitationem autem reprehenderit et consectetur quos, aspernatur
          mollitia, magnam iure sed iusto ullam. Possimus provident adipisci
          quisquam necessitatibus nam ut est. Nam itaque mollitia excepturi
          eius! Excepturi labore voluptatem quod, nobis qui, facere ea
          voluptates iusto temporibus mollitia recusandae minus consequatur
          voluptatum fugiat nisi reiciendis odio fugit cum. Nulla facere alias
          deleniti aut iure dolor.
        </p>

        <h4 id="scrollspyHeading2">Second heading</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus
          maiores sapiente perspiciatis earum unde voluptates totam libero ex
          rem dignissimos. Dolorum voluptate, qui tempore porro eaque, natus
          voluptatem illum ad ullam quisquam labore pariatur cumque ducimus.
          Veniam quas libero numquam quasi earum id, alias architecto nulla,
          illum, repellendus vitae et impedit rerum ipsam quam aspernatur qui
          dolor? Aliquam unde veritatis, ullam quas cumque fugit debitis qui
          quibusdam? Ratione veniam in sed. Ducimus tenetur ea similique
          eligendi eum consectetur perspiciatis velit, provident et temporibus
          quos, enim amet esse atque debitis ab explicabo, tempore minima vitae
          fugiat quis dignissimos aspernatur hic consequatur. Odio esse fugit,
          dolores laudantium libero asperiores fuga voluptatem rerum
          necessitatibus veritatis quibusdam. Necessitatibus totam quis earum
          ipsa itaque aut placeat in accusantium nisi quam amet non, doloremque
          ab saepe tenetur ad incidunt quia? Nobis maiores eius sequi neque
          expedita tempora vitae dolorem. Nesciunt facere tempora cum corrupti,
          natus ducimus temporibus fuga quos ratione! Architecto accusantium
          saepe maiores facilis eum culpa provident ducimus, cupiditate quaerat
          consequatur temporibus tempore voluptatum autem mollitia magni unde
          animi repellat, dignissimos molestiae assumenda quas est? Impedit,
          repudiandae dolorum beatae ullam perferendis facere voluptate!
          Consequatur repudiandae vitae hic? Dolorum voluptate eligendi
          necessitatibus porro, nemo laborum fugit.
        </p>
        <h4 id="scrollspyHeading3">Third heading</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
          laboriosam nesciunt, esse excepturi ad aut et similique eligendi, amet
          temporibus reiciendis voluptates animi mollitia molestias? Nemo
          veritatis unde quia maiores ut laboriosam odio hic accusamus ipsam
          quaerat fugiat voluptates, aperiam necessitatibus earum dolor autem
          deleniti ratione quidem sed ullam qui magni, rem voluptate modi!
          Dolore pariatur nam excepturi nostrum mollitia magnam nesciunt quod
          itaque dignissimos placeat iure eligendi adipisci voluptatum,
          reprehenderit officiis deserunt ea repellendus facilis maiores at, cum
          autem harum consectetur odit? Quaerat cupiditate qui fugiat
          reprehenderit dolorem, aliquid ea velit consectetur quia? Dolor quam
          ex omnis repellendus pariatur distinctio similique adipisci
          praesentium accusantium blanditiis dignissimos beatae totam tenetur
          quibusdam, unde magni saepe enim voluptates minus hic nostrum odio
          porro quisquam eum! Delectus maxime iusto omnis blanditiis ducimus
          quas quibusdam perspiciatis eligendi eius reprehenderit sint
          cupiditate, pariatur laboriosam similique. Totam enim natus, numquam
          cumque sed sapiente esse placeat provident, ut blanditiis dolores
          possimus ullam, aperiam magni assumenda asperiores porro maxime
          inventore libero itaque dolore laborum explicabo. Ipsa at odit
          mollitia neque voluptatum est enim repellat expedita, quae dolorem
          iusto dolore harum unde culpa provident facilis. Sunt provident
          deserunt, distinctio eum incidunt dolor quas! Dolore cupiditate
          tenetur asperiores dignissimos officia nihil unde tempora porro
          perferendis in aliquid earum eligendi delectus provident esse
          quibusdam doloribus rem, consectetur ullam itaque quis. Eaque alias
          cupiditate voluptates iusto quod eveniet tenetur assumenda qui
          similique itaque ut eius unde accusamus, reiciendis error! Unde harum,
          neque minima incidunt nihil voluptatum impedit officia accusamus
          eveniet tenetur dicta dignissimos earum ea error amet odit fugit
          sapiente vero id tempora ut facilis? Explicabo voluptatem inventore
          quisquam suscipit iste, ducimus, id asperiores eum reiciendis ea
          corporis consectetur perspiciatis quia corrupti assumenda nulla soluta
          recusandae ut fugit autem consequatur cupiditate excepturi sunt
          eligendi. Enim ab harum placeat consequatur aliquid corrupti esse!
        </p>
        <h4 id="scrollspyHeading4">Fourth heading</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          dolorem explicabo quidem nostrum ratione enim libero sit illo nihil,
          perferendis natus facilis, voluptatem quos porro deleniti doloremque
          quo beatae sint. Omnis, nesciunt? Dolores quidem consequatur eum nam
          esse deserunt saepe quod voluptates alias sed! Reiciendis, cum.
          Voluptatum, incidunt officiis quo reprehenderit voluptas
          exercitationem laudantium, itaque necessitatibus, nesciunt beatae
          recusandae magni aspernatur accusamus. Dicta, consequatur dolore
          perferendis alias esse non, placeat magni inventore corporis maxime
          aliquid voluptas! Delectus laboriosam, praesentium porro maiores
          quaerat deleniti ab qui ratione sapiente repellat exercitationem
          adipisci ipsa? Voluptatem consectetur soluta dolore fugit optio saepe
          delectus illum eum. Eligendi, accusantium reprehenderit voluptatem
          consequatur voluptatum facilis maiores doloribus eaque odio
          repudiandae recusandae illo rerum vero libero et nihil molestiae
          magnam autem accusamus fugiat eius nulla tenetur! Odit velit vel
          perspiciatis voluptates, exercitationem id. Nemo expedita nostrum
          libero ipsa illo, quae quo nam quas sint exercitationem sed porro
          molestias? Id minus iste est eaque dolores, aspernatur ut deleniti
          voluptas quod, sapiente suscipit molestiae vel libero quisquam ullam a
          laboriosam facere, sunt hic. Eaque temporibus perferendis maxime
          delectus ullam iure sequi. Possimus, distinctio dolorum mollitia
          laudantium unde tempore corporis porro accusantium voluptatem dolor
          soluta neque voluptatum eum itaque accusamus doloremque?
        </p>
        <h4 id="scrollspyHeading5">Fifth heading</h4>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit porro
          natus veniam aut officia. Quis expedita quos delectus molestias sint
          ad et, rerum maxime deleniti nostrum neque dolor cum enim nobis unde
          corrupti non illo cupiditate quisquam qui, nisi officiis! Magnam
          itaque maiores quisquam dicta. Harum soluta repudiandae veniam
          molestiae ad dolore eveniet quod rerum, expedita eius dicta porro
          voluptatem fuga sed facere obcaecati ducimus corporis. Accusamus
          exercitationem error reiciendis quam tenetur eaque deleniti rerum
          consectetur doloribus vel nulla blanditiis explicabo suscipit ratione,
          nihil, nostrum quas ipsa possimus debitis quasi repellat? Placeat
          corporis cum cumque aliquid? Maiores ducimus accusantium sapiente
          dolorem saepe animi repudiandae quaerat aliquam tempore, praesentium
          commodi, consequuntur porro neque, voluptatem distinctio illum. Unde
          sit hic laudantium vel amet, quibusdam maiores magnam reiciendis
          similique consequatur nesciunt numquam eius blanditiis explicabo
          accusantium necessitatibus minus. Sapiente rerum id, quae officiis
          debitis modi animi, ut eaque corporis nisi explicabo accusamus quo,
          autem facere blanditiis dolore ducimus nulla tempora possimus.
          Voluptatem nihil delectus quia harum nostrum nisi odio, distinctio,
          mollitia possimus molestiae fuga itaque. Voluptates architecto ea
          provident quia quisquam, eos modi exercitationem amet quos, nam facere
          eligendi quasi. Fugiat aut natus praesentium deserunt quia quam hic
          nesciunt sit aliquam nostrum. Enim.
        </p>
      </div>
    </>
  );
};

export default Scrollspy;
