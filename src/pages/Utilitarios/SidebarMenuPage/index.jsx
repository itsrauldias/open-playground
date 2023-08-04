import { Link } from 'react-router-dom';
import { SidebarMenu } from '../../../Components/SidebarMenu';

export function SidebarMenuPage() {

    return (
        <>
            <h3>Menu lateral</h3>
            <span>
                <Link to={'/open-playground/menu/utilitarios'}><i className='fa fa-caret-left' /> Voltar</Link>
            </span>
            <div className="card">
                <div className='tooltip'>
                    Info <i className='fa fa-info-circle' />
                    <span>
                        Menu lateral
                    </span>
                </div>
                <hr />
                <SidebarMenu activateMenu={<><i className='fa fa-list' /> Menu</>}>
                    {/* Conteúdo do menu */}
                    <div className="card">
                        <b>Teste</b>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam hic eveniet laudantium unde quos dolorum harum dolore aliquam, quam molestiae earum, sequi, nihil quisquam porro laborum natus. Iste, quibusdam animi!
                        </p>
                    </div>
                    <hr />
                    <div className="card">
                        teste
                    </div>
                </SidebarMenu>
                <hr />
                <div>
                    <p>
                        <b>Lorem ipsum</b> dolor sit amet consectetur adipisicing elit. Quos esse, cum sunt suscipit eos sequi distinctio? Numquam reprehenderit illo veritatis ullam dolores et sequi commodi sint accusamus, expedita asperiores corporis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim nemo temporibus reiciendis fuga veniam deserunt eveniet nulla asperiores est, sed tempora accusamus aspernatur exercitationem ratione impedit consectetur non ea aliquam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et tenetur sunt quibusdam, eum a voluptate. Ipsum veritatis sed similique autem laudantium quo a cupiditate assumenda. Quis quam alias et tempora.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, perspiciatis, eum delectus nihil ea eaque minus error assumenda aliquid maiores laboriosam odio. Culpa aperiam, mollitia suscipit possimus quis consequuntur officia. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio illo sequi nam possimus consectetur aliquam voluptates quam velit atque ipsa exercitationem architecto similique debitis aperiam, error non culpa ratione laudantium.
                    </p>
                </div>
            </div>
        </>
    )
}